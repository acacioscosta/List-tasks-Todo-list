import { View } from "react-native";
import styles from './styles'

import ButtonAddTask from "../../components/ButtonAddTask";
import Tasks from "../../components/Tasks";

export default function Home() {
  return (
    <View style={styles.container}>
      <ButtonAddTask />

      <Tasks />
    </View>
  )
}