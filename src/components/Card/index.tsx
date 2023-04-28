import React from "react";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import { MapCategoryScreen, MapCategoryTitle } from "../../services/categories";
import { Task } from "../Tasks";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import CustomPressable from "../Common/Pressable";
import { remove_task } from "../../services/storage";

type Props = {
  task: Task,
  onRemove: () => void
}

const Card = ({ task, onRemove }: Props) => {
  const { navigate } = useNavigation<StackTypes>()

  const getInfo = () => {
    let complete = 0

    for (const item of task.items) {
      item.done && complete++
    }

    return complete + ' / ' + task.items.length
  }

  const handleTask = (item: Task) => {
    const screen = MapCategoryScreen[item.category] as any

    navigate(screen, {
      id: item.id,
      title: item.description,
      items: item.items
    })
  }

  const removeTask = async (id: number) => {
    await remove_task(id)
    
    onRemove()
  }

  return (
    <CustomPressable
      onPress={() => handleTask(task)}
      onLongPress={() => (
        Alert.alert(
          'Remover lista',
          `Deseja remover a lista "${task.description}"?`,
          [
            {
              text: 'NÃO',
              onPress: () => {},
              style: 'cancel',
            },
            {text: 'SIM', onPress: () => removeTask(task.id)},
          ]
        )
      )}
      customStyle={styles.container}
    >
      <View>
        <View style={styles.view_category}>
          <Text style={styles.text_view_category}>
            {MapCategoryTitle[task.category]}
          </Text>

          <View style={styles.view_status}>
            <Text style={styles.text_view_status}>
              {getInfo()}
            </Text>
          </View>
        </View>

        <Text style={styles.title}>
          {task.description}
        </Text>
      </View>
    </CustomPressable>
  )
}

export default Card