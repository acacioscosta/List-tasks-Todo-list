import { View, Text, Alert } from "react-native";
import Input from "../../components/Common/Input";
import styles from "./styles";
import RadioList from "../../components/RadioList";
import Button from "../../components/Common/Button";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import { store_data } from "../../services/storage";

export default function AddTask() {
  const { navigate } = useNavigation<StackTypes>()

  const categories = [
    { label: 'Compras', value: 'shopping', icon: 'shopping-cart' },
    { label: 'Geral', value: 'general', icon: 'list' }
  ]

  let task_name = ''
  let category_selected = ''

  const add = async () => {
    if (!task_name || !category_selected) {
      return Alert.alert(
        'Ops!',
        'Informe o nome e a categoria'
      )
    }

    await store_data('')

    const screen = category_selected === 'general' ? 'TaskGeneral' : 'TaskShopping'

    navigate(screen, { title: task_name })
  }

  return (
    <View style={[styles.container, { paddingHorizontal: 20 }]}>
      <Input
        placeholder="Nome da lista"
        onChangeText={text => task_name = text}
      />

      <Text style={styles.text_category}>
        Categoria
      </Text>

      <RadioList
        options={categories}
        onSelect={item => category_selected = item.value}
      />

      <Button
        onPress={add}
        label="ADICIONAR"
        type="primary"
      />

      <Button
        onPress={() => navigate('Home')}
        label="Cancelar"
        type="secondary"
      />
    </View>
  )
}