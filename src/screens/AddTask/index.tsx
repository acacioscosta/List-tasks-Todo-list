import { View, Text, Alert } from "react-native";
import Input from "../../components/Common/Input";
import styles from "./styles";
import RadioList from "../../components/RadioList";
import Button from "../../components/Common/Button";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import { store_task } from "../../services/storage";
import { MapCategoryScreen, Categories } from "../../services/categories";
import { Feather, MaterialIcons } from '@expo/vector-icons'

export default function AddTask() {
  const { navigate } = useNavigation<StackTypes>()

  let task_name = ''
  let category_selected = ''

  const add = async () => {
    if (!task_name || !category_selected) {
      return Alert.alert(
        'Ops!',
        'Informe o nome e a categoria'
      )
    }

    const id = new Date().getTime()

    await store_task({
      key: 'tasks',
      value: {
        id,
        description: task_name,
        category: category_selected,
        items: []
      }
    })

    const screen = MapCategoryScreen[category_selected] as any

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
        options={Categories}
        onSelect={item => category_selected = item.value}
      />

      <Button
        onPress={add}
        label="ADICIONAR"
        type="primary"
      >
        <Feather
          name="plus-circle"
          size={24}
          style={{ marginLeft: 10 }}
        />
      </Button>

      <Button
        onPress={() => navigate('Home')}
        label="Cancelar"
        type="secondary"
      >
        <MaterialIcons
          name="cancel"
          color={'white'}
          size={24}
          style={{ marginLeft: 10 }}
        />
      </Button>
    </View>
  )
}