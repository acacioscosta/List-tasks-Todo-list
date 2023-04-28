import { Pressable, PressableProps } from 'react-native'

interface Props extends PressableProps {
  customStyle?: object
}

const CustomPressable = (props: Props) => {
  const { customStyle, children } = props

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        { opacity: pressed ? .5 : 1 },
        customStyle
      ]}
      android_ripple={{ borderless: false, foreground: true }}
    >
      {children}
    </Pressable>
  )
}

export default CustomPressable