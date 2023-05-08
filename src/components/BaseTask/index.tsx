import { View, TouchableOpacity, ViewProps } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackTypes, TaskGeneralRouteProp, TaskShoppingRouteProp } from "../../routes";
import { useEffect } from "react";
import { Ionicons, Feather } from '@expo/vector-icons'
import styles from "./styles";
import { colors } from "../../global_styles";
import ModalAddItem from "../ModalAddItem";

interface Props extends ViewProps {
  showModal: () => void
  isVisible: boolean
  save: () => void
  close: () => void
  onChangeText: (text: string) => void
}

export default function BaseTask(props: Props) {
  const { showModal, isVisible, save, close, onChangeText } = props

  const { setOptions, reset } = useNavigation<StackTypes>()
  const { params } = useRoute<TaskGeneralRouteProp | TaskShoppingRouteProp>()

  useEffect(() => {
    setOptions({
      title: params.title.toUpperCase(),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          }}
        >
          <Ionicons
            name="md-arrow-back"
            size={24}
            color={colors.secondary}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={showModal}>
          <Feather
            name="plus-circle"
            size={30}
            color={colors.secondary}
          />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={[styles.container, { paddingHorizontal: 20 }]}>
      <View style={{ marginTop: 0 }}>
        {props.children}
      </View>

      <ModalAddItem
        isVisible={isVisible}
        close={close}
        onPress={save}
        onChangeText={onChangeText}
      />
    </View>
  )
}