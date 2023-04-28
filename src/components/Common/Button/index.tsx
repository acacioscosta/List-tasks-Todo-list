import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import styles from './styles'

interface Props extends TouchableOpacityProps {
  label: string
  type: 'primary' | 'secondary'
  onPress: () => void
  textStyle?: TextStyle,
}

const Button = (props: Props) => {
  const { label, type, onPress, style, textStyle, children } = props

  const mapStyles = {
    'primary': {
      'button': styles.primary_button,
      'text': styles.primary_text_button
    },
    'secondary': {
      'button': styles.secondary_button,
      'text': styles.secondary_text_button
    }
  }

  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[mapStyles[type]['button'] as TextStyle, style]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[mapStyles[type]['text'] as TextStyle, textStyle ]}>
          {label}
        </Text>

        {children}
      </View>
    </TouchableOpacity>
  )
}

export default Button