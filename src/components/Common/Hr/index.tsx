import { View, ViewProps } from 'react-native'
import { colors } from '../../../global_styles'

interface Props extends ViewProps {}

export default function Hr(props: Props) {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        marginVertical: 14
      }}
      {...props}
    />
  )
}