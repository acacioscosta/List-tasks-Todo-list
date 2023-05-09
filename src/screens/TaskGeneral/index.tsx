import { Alert, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { TaskGeneralRouteProp } from "../../routes";
import { useEffect, useState } from "react";
import { GeneralItem } from "../../components/Tasks";
import { store_item_task } from "../../services/storage";
import ListItemGeneral from "../../components/ListItemGeneral";
import BaseTask from "../../components/BaseTask";

export default function TaskGeneral() {
  const { params } = useRoute<TaskGeneralRouteProp>()

  let description = ''
  const [tasks, setTasks] = useState<GeneralItem[]>([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    params?.items && setTasks(params.items)
  }, [])

  const save = async () => {
    const newData = description
      ? [...tasks, { description, done: false }]
      : tasks
    
    const tasks_sorted = sortByDone(newData)

    await setStorage(tasks_sorted)
    
    setTasks(tasks_sorted)
    setShow(false)
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

    await setStorage(tasks_sorted)

    setTasks(tasks_sorted)
  }

  const remove = async (index: number) => {
    const new_tasks = tasks.slice()
    new_tasks.splice(index, 1)

    await setStorage(new_tasks)

    setTasks(new_tasks)
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

  const showAlert = (item: GeneralItem, index: number) => {
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
  }

  return (
    <BaseTask
      showModal={() => setShow(true)}
      isVisible={show}
      save={save}
      close={() => {
        description = ''

        setShow(false)
      }}
      onChangeText={(text: string) => description = text}
    >
      <ScrollView style={{ marginTop: 14 }}>
        {
          tasks.map((item, index) => (
            <ListItemGeneral
              key={index}
              item={item}
              check={() => check(index)}
              remove={() => showAlert(item, index)}
            />
          ))
        }
      </ScrollView>
    </BaseTask>
  )
}