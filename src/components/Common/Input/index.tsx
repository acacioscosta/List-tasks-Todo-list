import { TextInput, TextInputProps } from "react-native";
import { colors } from "../../../global_styles";

interface Props extends TextInputProps {
  style?: object;
}

const Input = (props: Props) => {
  return (
    <TextInput
      {...props}
      onChangeText={props.onChangeText}
      placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : colors.secondary}
      style={[
        {
          borderWidth: 1,
          borderColor: colors.secondary,
          padding: 20,
          fontSize: 22,
          borderRadius: 6,
          marginVertical: 20,
          fontWeight: '400',
          fontStyle: "italic",
          color: colors.secondary
        },
        props.style,
      ]}
    />
  )
}

export default Input