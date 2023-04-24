import { View } from "react-native";
import styles from './styles'

import ButtonAddTask from "../../components/ButtonAddTask";
import Tasks, { Task } from "../../components/Tasks";
import { useEffect, useState } from "react";
import { get_data } from "../../services/storage";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    (async () => {
      const tasks_storage = await get_data('tasks')

      tasks_storage && tasks_storage.length
        ? setTasks(tasks_storage)
        : setTasks([])
    })()
  }, [])

  const renderComponents = () => {
    if (!tasks.length) {
      return <ButtonAddTask />
    }

    return (
      <>
        <ButtonAddTask />

        <Tasks tasks={tasks} />
      </>
    )
  }

  return (
    <View style={styles.container}>
      {renderComponents()}
    </View>
  )
}