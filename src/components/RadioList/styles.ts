import { StyleSheet } from 'react-native'
import { colors } from '../../global_styles'

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    paddingHorizontal: 14
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26
  },

  view_icon_left: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 12
  },

  label: {
    marginLeft: 22,
    color: colors.secondary,
    fontSize: 28
  }
})

export default styles