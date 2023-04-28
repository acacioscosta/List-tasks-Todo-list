import { Text } from 'react-native'
import CustomPressable from '../Common/Pressable'
import { GeneralItem } from '../Tasks'
import { AntDesign, Feather } from '@expo/vector-icons'
import { colors } from '../../global_styles'
import styles from './styles'

type Props = {
  item: GeneralItem
  check: () => void
  remove: () => void
}

export default function ListItemGeneral(props: Props) {
  const { item, check, remove } = props

  return (
    <CustomPressable
      onPress={check}
      onLongPress={remove}
      customStyle={styles.view_item}
    >
      {item.done && (
        <AntDesign
          name={'checkcircle'}
          size={24}
          color={colors.secondary}
        />
      )}

      {!item.done && (
        <Feather
          name={'circle'}
          size={24}
          color={colors.secondary}
        />
      )}

      <Text style={item.done ? styles.done : styles.description}>
        {item.description}
      </Text>
    </CustomPressable>
  )
}