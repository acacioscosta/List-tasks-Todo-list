import { View, Text, FlatList } from 'react-native'
import Card from '../Card'
import styles from './styles'

type Task = {
  description: string
  category: string
}

type Props = {
  tasks: Task[]
}

export { Task }

export default function Tasks(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Minhas listas
      </Text>

      <FlatList
        data={props.tasks}
        renderItem={({ item }) => <Card task={item} />}
      />
    </View>
  )
}