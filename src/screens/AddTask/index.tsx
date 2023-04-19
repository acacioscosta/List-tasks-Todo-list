import { View, Text } from "react-native";
import Input from "../../components/Common/Input";
import styles from "./styles";
import RadioList, { Option } from "../../components/RadioList";
import Button from "../../components/Common/Button";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";

export default function AddTask() {
  const { navigate } = useNavigation<StackTypes>()

  const categories = [
    { label: 'Compras', value: 1, icon: 'shopping-cart' },
    { label: 'Geral', value: 2, icon: 'list' }
  ]

  let selected: Option

  return (
    <View style={[styles.container, { paddingHorizontal: 20 }]}>
      <Input
        placeholder="Nome da lista"
      />

      <Text style={styles.text_category}>
        Categoria
      </Text>

      <RadioList
        options={categories}
        onSelect={item => selected = item}
      />

      <Button
        onPress={() => console.log(selected)}
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