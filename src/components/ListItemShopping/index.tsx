import { Text, TouchableOpacity, View } from 'react-native'
import CustomPressable from '../Common/Pressable'
import { ShoppingItem } from '../Tasks'
import { AntDesign, Feather } from '@expo/vector-icons'
import { colors } from '../../global_styles'
import styles from './styles'
import ModalChangeValue from '../ModalChangeValue'
import { useState } from 'react'

type Props = {
  item: ShoppingItem
  check: () => void
  remove: () => void
  increase: () => void
  decrease: () => void
  onChangeAmount: (text: string) => void
  onChangeValue: (value: number) => void
}

export default function ListItemShopping(props: Props) {
  const { item, check, remove, increase, decrease, onChangeAmount, onChangeValue } = props

  const [showModalValue, setShowModalValue] = useState(false)
  const [showModalAmount, setShowModalAmount] = useState(false)

  let value_temp = 0
  let amount_temp = ''

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

      <View style={styles.view_info}>
        <TouchableOpacity
          onPress={() => setShowModalValue(true)}
          style={[styles.view_values, { width: '100%' }]}
        >
          <Text style={styles.text_description}>
            UNIDADE
          </Text>

          <Text style={{ color: colors.secondary }}>
            R$ {item.value || '0,00'}
          </Text>
          
          <ModalChangeValue
            isVisible={showModalValue}
            onPress={() => {
              setShowModalValue(false)

              onChangeValue(value_temp)
            }}
            item={item}
            type='value'
            onChangeValue={(value: number) => value_temp = value}
          />
        </TouchableOpacity>

        <View style={styles.view_values}>
          <Text style={styles.text_description}>
            TOTAL
          </Text>

          <Text style={{ color: colors.secondary }}>
            R$ {item.total || '0,00'}
          </Text>
        </View>

        <View style={styles.view_amount}>
          <TouchableOpacity
            onPress={decrease}
            disabled={item.amount == 0}
            style={{
              opacity: item.amount == 0 ? .5 : 1,
              flex: .8
            }}
          >
            <AntDesign
              name={'minuscircleo'}
              size={24}
              color={colors.secondary}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShowModalAmount(true)}>
            <Text style={styles.text_amount}>
              {item.amount}
            </Text>

            <ModalChangeValue
              isVisible={showModalAmount}
              onPress={() => {
                setShowModalAmount(false)

                onChangeAmount(amount_temp)
              }}
              item={item}
              type='amount'
              onChangeText={(text: string) => amount_temp = text || ''}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={increase}
            style={{ flex: .8 }}
          >
            <AntDesign
              style={{ marginLeft: 'auto'}}
              name={'pluscircleo'}
              size={24}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}