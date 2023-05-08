import { Alert, ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { TaskShoppingRouteProp } from "../../routes";
import { useEffect, useState } from "react";
import { ShoppingItem } from "../../components/Tasks";
import { store_item_task } from "../../services/storage";
import ListItemShopping from "../../components/ListItemShopping";
import BaseTask from "../../components/BaseTask";
import styles from "./styles";

export default function TaskShopping() {
  const { params } = useRoute<TaskShoppingRouteProp>()

  let description = ''
  const [tasks, setTasks] = useState<ShoppingItem[]>([])
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (params.items) {
      setTasks(params.items)

      calcTotal(params.items)
    }
  }, [])

  const save = async () => {
    const newData = description
      ? [
          ...tasks,
          {
            description,
            done: false,
            amount: 0,
            value: 0,
            total: 0
          }
        ]
      : tasks

    const tasks_sorted = sortByDone(newData)

    await setStorage(tasks_sorted)

    setShow(false)
  }

  const setStorage = async (data: ShoppingItem[]) => {
    await store_item_task({
      id: params.id,
      tasks: data
    })

    setTasks(data)

    calcTotal(data)
  }

  const check = async (index: number) => {
    const new_tasks = tasks.map((item, i) => {
      return index === i
        ? { ...item, done: !item.done }
        : item
    })

    const tasks_sorted = sortByDone(new_tasks)

    await setStorage(tasks_sorted)
  }

  const remove = async (index: number) => {
    const new_tasks = tasks.slice()
    new_tasks.splice(index, 1)

    await setStorage(new_tasks)
  }

  const sortByDone = (tasks: ShoppingItem[]) => {
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

  const showAlert = (item: ShoppingItem, index: number) => {
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

  const increase = async (index: number) => {
    const newData = tasks.map((item, i) => {
      if (i != index) {
        return item
      }

      const amount = (item.amount || 0) + 1

      return {
        ...item,
        amount,
        total: parseFloat((amount * item.value).toFixed(2))
      }
    })

    await setStorage(newData)
  }

  const decrease = async (index: number) => {
    const newData = tasks.map((item, i) => {
      if (i != index) {
        return item
      }

      const amount = (item.amount || 0) - 1

      return {
        ...item,
        amount,
        total: parseFloat((amount * item.value).toFixed(2))
      }
    })

    await setStorage(newData)
  }

  const changeAmount = async (amount: string, index: number) => {
    const newData = tasks.map((item, i) => {
      if (i != index) {
        return item
      }

      const newAmount = amount ? parseInt(amount) : 0

      return {
        ...item,
        amount: newAmount,
        total: parseFloat((newAmount * item.value).toFixed(2))
      }
    })

    await setStorage(newData)
  }

  const changeValue = async (index: number, newValue: number) => {
    const newData = tasks.map((item, i) => {
      if (i != index) {
        return item
      }

      return {
        ...item,
        value: newValue,
        total: parseFloat((item.amount * newValue).toFixed(2))
      }
    })

    await setStorage(newData)
  }

  const calcTotal = (data?: ShoppingItem[] | undefined) => {
    let total = 0

    for (const task of data || tasks) {
      total += task.total
    }

    setTotal(parseFloat(total.toFixed(2)))
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
      <View style={styles.view_total}>
        <Text style={{ color: 'white', fontSize: 18 }}>
          TOTAL: R$ {total || '0,00'}
        </Text>
      </View>

      <ScrollView style={{ marginBottom: 32 }}>
        {
          tasks.map((item, index) => (
            <ListItemShopping
              key={index}
              item={item}
              check={() => check(index)}
              remove={() => showAlert(item, index)}
              increase={() => increase(index)}
              decrease={() => decrease(index)}
              onChangeAmount={(amount: string) => changeAmount(amount, index)}
              onChangeValue={(newValue: number) => changeValue(index, newValue)}
            />
          ))
        }
      </ScrollView>
    </BaseTask>
  )
}