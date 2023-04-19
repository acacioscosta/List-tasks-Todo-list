import { Text, TextStyle, TouchableOpacity } from 'react-native'
import { colors } from '../../../global_styles'

type Props = {
  label: string
  type: 'primary' | 'secondary'
  onPress: () => void
}

const Button = (props: Props) => {
  const { label, type, onPress } = props

  const mapStyles = {
    'primary': {
      'button': {
        backgroundColor: colors.secondary,
        padding: 12,
        alignItems: 'center',
        borderRadius: 6
      },
      'text': {
        color: colors.primary,
        fontSize: 22,
        fontWeight: 'bold'
      }
    },
    'secondary': {
      'button': {
        backgroundColor: colors.primary,
        padding: 12,
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 22
      },
      'text': {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: '300',
        fontStyle: 'italic'
      }
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={mapStyles[type]['button'] as TextStyle}
    >
      <Text style={mapStyles[type]['text'] as TextStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default Button