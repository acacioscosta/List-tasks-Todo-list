import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type TaskProps = {
  description: string;
  category: string;
}

type Props = {
  task: TaskProps
}

const Card = ({ task }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.view_category}>
        <Text style={styles.text_view_category}>
          {task.category}
        </Text>

        <Text style={styles.text_view_category}>
          5/8
        </Text>
      </View>

      <Text style={styles.title}>
        {task.description}
      </Text>
    </View>
  )
}

export default Card