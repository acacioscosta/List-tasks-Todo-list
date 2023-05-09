import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MapCategoryScreen, MapCategoryTitle } from "../../services/categories";
import { Task } from "../Tasks";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import CustomPressable from "../Common/Pressable";
import { remove_task } from "../../services/storage";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ModalTaskOption from "../ModalTaskOption";

type Props = {
  task: Task,
  onRemove: () => void
}

const Card = (props: Props) => {
  const { task, onRemove } = props

  const { navigate } = useNavigation<StackTypes>()

  const [isVisible, setVisible] = useState(false)

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

  const removeConfirmation = () => {
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
  }

  return (
    <CustomPressable
      onPress={() => handleTask(task)}
      onLongPress={removeConfirmation}
      customStyle={styles.container}
    >
      <View>
        <View style={styles.view_category}>
          <Text style={styles.text_view_category}>
            {MapCategoryTitle[task.category]}
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.view_status}>
              <Text style={styles.text_view_status}>
                {getInfo()}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={{ paddingLeft: 10 }}
            >
              <MaterialCommunityIcons
                name="cog-outline"
                color={'white'}
                size={26}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>
          {task.description}
        </Text>
      </View>

      <ModalTaskOption
        isVisible={isVisible}
        close={() => setVisible(false)}
        onPress={removeConfirmation}
        task={task}
      />
    </CustomPressable>
  )
}

export default Card