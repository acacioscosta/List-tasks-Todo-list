import { View, Text, FlatList } from 'react-native'
import Card from '../Card'
import styles from './styles'

type GeneralItem = {
  description: string
  done: boolean
}

type ShoppingItem = {
  description: string
  done: boolean
  amount: number
  value: number
  total: number
}

type Task = {
  id: number,
  description: string
  category: string,
  items: GeneralItem[] | ShoppingItem[]
}

type Props = {
  tasks: Task[],
  onRemove: () => void
}

export { Task, GeneralItem, ShoppingItem }

export default function Tasks(props: Props) {
  const { tasks, onRemove } = props

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Minhas listas
      </Text>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Card
            task={item}
            onRemove={onRemove}
          />
        )}
      />
    </View>
  )
}