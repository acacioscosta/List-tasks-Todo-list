import CustomModal from '../Common/Modal';
import { View, Text } from 'react-native';
import Input from '../Common/Input';
import Button from '../Common/Button';
import { Feather } from '@expo/vector-icons'
import styles from "./styles";
import { colors } from "../../global_styles";
import { ShoppingItem } from '../Tasks';
import CurrencyInputComponent from '../Common/CurrencyInput';

type Props = {
  isVisible: boolean
  onPress: () => void
  item: ShoppingItem
  type: 'value' | 'amount'
  onChangeValue?: (value: number) => number
  onChangeText?: (text: string) => string
}

export default function ModalChangeValue(props: Props) {
  const { isVisible, onPress, item, type, onChangeValue, onChangeText } = props

  return (
    <CustomModal isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {item.description.toUpperCase()} - {type === 'value' ? 'Valor Unitário' : 'Quantidade'}
        </Text>

        {type === 'value' && (
          <View style={styles.view_currency_input}>
            <CurrencyInputComponent
              style={{
                fontSize: 20
              }}
              onChangeValue={onChangeValue}
            />
          </View>
        )}

        {type === 'amount' && (
          <Input
            placeholder="Informe a quantidade"
            placeholderTextColor={colors.secondary}
            style={{ width: '100%' }}
            onChangeText={onChangeText}
            keyboardType='decimal-pad'
          />
        )}

        <Button
          label="Salvar"
          onPress={onPress}
          type="primary"
        >
          <Feather
            name="upload"
            color={colors.primary}
            size={24}
            style={{ marginLeft: 10 }}
          />
        </Button>
      </View>
    </CustomModal>
  );
};