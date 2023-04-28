import Modal, { ModalProps } from "react-native-modal";
import { View } from 'react-native';

interface Props extends ModalProps {
  isVisible: boolean
  close: () => void
}

export default function CustomModal(props: Props) {
  const { isVisible, close, children } = props

  return (
    <View>
      <Modal
        {...props}
        isVisible={isVisible}
        onBackdropPress={close}
        backdropOpacity={.9}
      >
        {children}
      </Modal>
    </View>
  );
};