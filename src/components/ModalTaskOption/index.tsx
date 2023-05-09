import CustomModal from '../Common/Modal';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons'
import { colors } from "../../global_styles";
import Hr from '../Common/Hr';
import { Task } from '../Tasks';
import styles from './styles';

type Props = {
  isVisible: boolean
  onPress: () => void
  close: () => void
  task: Task
}

export default function ModalTaskOption(props: Props) {
  const { isVisible, onPress, close, task } = props

  return (
    <CustomModal
      isVisible={isVisible}
      close={close}
      style={styles.container}
    >
      <View style={styles.view_content}>
        <View style={styles.view_header}>
          <Text style={{ fontSize: 30 }}>
            Opções - {task.description}
          </Text>

          <TouchableOpacity onPress={close}>
            <AntDesign
              name='close'
              size={30}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>

        <Hr />

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <View style={styles.view_icon}>
            <Feather
              name='trash-2'
              size={30}
              color={colors.secondary}
            />
          </View>

          <Text style={styles.text}>
            Remover
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <View style={styles.view_icon}>
            <AntDesign
              name='export'
              size={30}
              color={colors.secondary}
            />
          </View>

          <Text style={styles.text}>
            Exportar
          </Text>
        </TouchableOpacity>
      </View>
    </CustomModal>
  );
};