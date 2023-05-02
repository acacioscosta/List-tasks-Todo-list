import { Text, View } from 'react-native'
import CustomPressable from '../Common/Pressable'
import { ShoppingItem } from '../Tasks'
import { AntDesign, Feather } from '@expo/vector-icons'
import { colors } from '../../global_styles'
import styles from './styles'

type Props = {
  item: ShoppingItem
  check: () => void
  remove: () => void
}

export default function ListItemShopping(props: Props) {
  const { item, check, remove } = props

  return (
    <CustomPressable
      onPress={check}
      onLongPress={remove}
      customStyle={styles.view_item}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20
          }}
        >
          <View>
            <Text style={styles.description}>
              {item.description}
            </Text>

            <Text style={{ color: `white`, marginVertical: 2 }}>
              UNITÁRIO: R$ 10,50
            </Text>

            <Text style={{ color: 'white', marginVertical: 2 }}>
              TOTAL: R$ 10,50
            </Text>
          </View>
        </View>

        <View style={{
          marginLeft: 'auto',
          alignItems: 'center'
        }}>
          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'minus-circle'}
              size={24}
              color={colors.secondary}
            />

            <Text style={{ color: `white`, marginHorizontal: 10 }}>1</Text>

            <Feather
              name={'plus-circle'}
              size={24}
              color={colors.secondary}
            />
          </View>

          <View style={{  }}>
            <Feather
              name={'trash-2'}
              size={24}
              color={colors.secondary}
            />
          </View>
        </View>
      </View>
    </CustomPressable>
  )
}