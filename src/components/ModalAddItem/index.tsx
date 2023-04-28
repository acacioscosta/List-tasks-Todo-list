import CustomModal from '../Common/Modal';
import { View, Text } from 'react-native';
import Input from '../Common/Input';
import Button from '../Common/Button';
import { Feather, MaterialIcons } from '@expo/vector-icons'
import styles from "./styles";
import { colors } from "../../global_styles";

type Props = {
  isVisible: boolean
  onPress: () => void
  onChangeText: (text: string) => void
  close: () => void
}

export default function ModalAddItem(props: Props) {
  const { isVisible, onPress, close, onChangeText } = props

  return (
    <CustomModal
      isVisible={isVisible}
      close={close}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Adicionar tarefa
        </Text>

        <Input
          placeholder="Descrição"
          placeholderTextColor={colors.secondary}
          style={{ width: '100%' }}
          onChangeText={onChangeText}
        />

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

        <Button
          label="Fechar"
          onPress={close}
          type="secondary"
          textStyle={{
            fontSize: 18
          }}
        >
          <MaterialIcons
            name="cancel"
            color={colors.secondary}
            size={24}
            style={{ marginLeft: 10 }}
          />
        </Button>
      </View>
    </CustomModal>
  );
};