import { StyleSheet } from 'react-native'
import { colors } from '../../global_styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },

  text: {
    textAlign: 'center',
    padding: 8,
    fontSize: 32,
    fontWeight: '400',
    color: colors.primary
  }
})

export default styles