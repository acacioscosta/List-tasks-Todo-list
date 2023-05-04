import { Text, TouchableOpacity, View } from 'react-native'
import CustomPressable from '../Common/Pressable'
import { ShoppingItem } from '../Tasks'
import { AntDesign, Feather } from '@expo/vector-icons'
import { colors } from '../../global_styles'
import styles from './styles'

type Props = {
  item: ShoppingItem
  check: () => void
  remove: () => void
  increase: () => void
  decrease: () => void
  onChangeAmount: (text: string) => void
}

export default function ListItemShopping(props: Props) {
  const { item, check, remove, increase, decrease, onChangeAmount } = props

  return (
    <View style={styles.container}>
      <CustomPressable
        onPress={check}
        onLongPress={remove}
        customStyle={styles.view_item}
      >
        {item.done && (
          <AntDesign
            name={'checkcircle'}
            size={30}
            color={colors.secondary}
          />
        )}

        {!item.done && (
          <Feather
            name={'circle'}
            size={30}
            color={colors.secondary}
          />
        )}

        <View style={{ marginLeft: 13 }}>
          <Text style={item.done ? styles.done : styles.description}>
            {item.description}
          </Text>

          <Text style={styles.text_values}>
            UNITÁRIO: R$ {item.value}
          </Text>

          <Text style={styles.text_values}>
            TOTAL: R$ {item.total}
          </Text>
        </View>
      </CustomPressable>

      <View style={styles.view_amount}>
        <TouchableOpacity onPress={increase}>
          <AntDesign
            name={'upcircleo'}
            size={30}
            color={colors.secondary}
          />
        </TouchableOpacity>

        <Text style={styles.text_amount}>{item.amount}</Text>

        <TouchableOpacity
          onPress={decrease}
          disabled={item.amount == 0}
          style={{
            opacity: item.amount == 0 ? .5 : 1
          }}
        >
          <AntDesign
            name={'downcircleo'}
            size={30}
            color={colors.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}