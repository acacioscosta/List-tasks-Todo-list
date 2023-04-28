import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackTypes, TaskGeneralRouteProp } from "../../routes";
import { useEffect, useState } from "react";
import { Ionicons, Feather } from '@expo/vector-icons'
import styles from "./styles";
import { GeneralItem } from "../../components/Tasks";
import ModalAddItem from "../../components/ModalAddItem";
import { store_item_task } from "../../services/storage";
import ListItemGeneral from "../../components/ListItemGeneral";

export default function TaskGeneral() {
  const { setOptions, reset } = useNavigation<StackTypes>()
  const { params } = useRoute<TaskGeneralRouteProp>()

  const [description, setDescription] = useState('')
  const [tasks, setTasks] = useState<GeneralItem[]>([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    setOptions({
      title: params?.title || 'Lista utilizada',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          }}
        >
          <Ionicons
            name="md-arrow-back"
            size={24}
            color={'white'}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setShow(true)}
        >
          <Feather
            name="plus-circle"
            size={26}
            color={'white'}
          />
        </TouchableOpacity>
      )
    })

    params?.items && setTasks(params.items)
  }, [])

  const save = () => {
    const newData = description
      ? [...tasks, { description, done: false }]
      : tasks    
    
    setTasks(newData)
    setDescription('')
    setShow(false)
    setStorage(newData)
  }

  const setStorage = async (data: GeneralItem[]) => {
    await store_item_task({
      id: params.id,
      tasks: data
    })
  }

  const check = async (index: number) => {
    const new_tasks = tasks.map((item, i) => {
      return index === i
        ? { ...item, done: !item.done }
        : item
    })

    const tasks_sorted = sortByDone(new_tasks)

    setTasks(tasks_sorted)
    setStorage(tasks_sorted)
  }

  const remove = (index: number) => {
    const new_tasks = tasks.slice()
    new_tasks.splice(index, 1)

    setTasks(new_tasks)
    setStorage(new_tasks)
  }

  const sortByDone = (tasks: GeneralItem[]) => {
    const sorted = tasks.sort((a, b) => {
      if (a.done === false && b.done === true) {
        return -1;
      }
      
      if (a.done === true && b.done === false) {
        return 1;
      }

      return 0;
    });

    return sorted
  }

  return (
    <View style={[styles.container, { paddingHorizontal: 20 }]}>
      <View style={{ marginTop: 20 }}>
        {
          tasks.map((item, index) => (
            <ListItemGeneral
              key={index}
              item={item}
              check={() => check(index)}
              remove={() => {
                Alert.alert(
                  'Remover item',
                  `Deseja remover "${item.description}"`,
                  [
                    {
                      text: 'Não',
                      onPress: () => {},
                      style: 'cancel',
                    },
                    {
                      text: 'SIM',
                      onPress: () => remove(index)},
                  ]
                )
              }}
            />
          ))
        }
      </View>

      <ModalAddItem
        isVisible={show}
        close={() => {
          setShow(false)
          setDescription('')
        }}
        onPress={() => save()}
        onChangeText={(text: string) => setDescription(text)}
      />
    </View>
  )
}