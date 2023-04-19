import { View, Text, FlatList } from 'react-native'
import Card from '../Card'
import styles from './styles'

export default function Tasks() {
  const tasks = [
    { description: 'Feira Abril', category: 'Compras' },
    { description: 'Lembrancinhas Antonella', category: 'Geral' },
    { description: 'Sábado', category: 'Geral' },
    { description: 'Feira Abril', category: 'Compras' },
    { description: 'Lembrancinhas Antonella', category: 'Geral' },
    { description: 'Sábado', category: 'Geral' },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Minhas listas
      </Text>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <Card task={item} />}
      />
    </View>
  )
}