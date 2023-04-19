import { View, Text, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes'

export default function ButtonAddTask() {
  const { navigate } = useNavigation<StackTypes>()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Adicionar nova lista
      </Text>

      <View style={styles.view_button}>
        <View style={styles.border}></View>
        
        <TouchableOpacity onPress={() => navigate('AddTask')}>
          <EvilIcons
            name="plus"
            size={100}
            color={'white'}
          />
        </TouchableOpacity>

        <View style={styles.border}></View>
      </View>
    </View>
  )
}