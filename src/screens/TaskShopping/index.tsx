import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackTypes, TaskShoppingRouteProp } from "../../routes";
import { useEffect } from "react";
import { Ionicons } from '@expo/vector-icons'
import styles from "./styles";

export default function Task() {
  const { setOptions, reset } = useNavigation<StackTypes>()
  const { params } = useRoute<TaskShoppingRouteProp>()

  useEffect(() => {
    setOptions({
      title: params?.title || 'Lista utilizada',
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
            color={'white'}
          />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Task</Text>
    </View>
  )
}