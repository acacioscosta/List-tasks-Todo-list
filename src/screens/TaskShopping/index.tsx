import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { TaskShoppingRouteProp } from "../../routes";
import { useEffect, useState } from "react";
import { ShoppingItem } from "../../components/Tasks";
import { store_item_task } from "../../services/storage";
import ListItemShopping from "../../components/ListItemShopping";
import BaseTask from "../../components/BaseTask";

export default function TaskShopping() {
  const { params } = useRoute<TaskShoppingRouteProp>()

  let description = ''
  const [tasks, setTasks] = useState<ShoppingItem[]>([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    params?.items && setTasks(params.items)
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
    
    setTasks(tasks_sorted)
    setShow(false)
  }

  const setStorage = async (data: ShoppingItem[]) => {
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

  const increase = (item: ShoppingItem, index: number) => {
    const newData = tasks.map((item, i) => {
      if (i != index) {
        return item
      }

      const amount = (item.amount || 0) + 1

      return {
        ...item,
        amount,
        total: amount * item.value
      }
    })

    setTasks(newData)
  }

  const decrease = (item: ShoppingItem, index: number) => {
    const newData = tasks.map((item, i) => {
      if (i != index) {
        return item
      }

      const amount = (item.amount || 0) - 1

      return {
        ...item,
        amount,
        total: amount * item.value
      }
    })

    setTasks(newData)
  }

  const changeAmount = (amount: number, index: number) => {
    const newTasks = tasks
    const { value } = newTasks[index]

    const newAmount = amount || 0

    newTasks[index] = {
      ...newTasks[index],
      amount: newAmount,
      total: newAmount * value
    }

    setTasks(newTasks)
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
      {
        tasks.map((item, index) => (
          <ListItemShopping
            key={index}
            item={item}
            check={() => check(index)}
            remove={() => showAlert(item, index)}
            increase={() => increase(item, index)}
            decrease={() => decrease(item, index)}
            onChangeAmount={(amount: string) => changeAmount(parseInt(amount), index)}
          />
        ))
      }
    </BaseTask>
  )
}