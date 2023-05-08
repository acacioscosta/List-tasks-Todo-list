import { StyleSheet } from 'react-native'
import { colors, dimensions } from '../../global_styles'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  view_currency_input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 20,
    borderRadius: 6,
    marginVertical: 20,
    width: '100%'
  },

  title: {
    color: colors.secondary,
    fontSize: 22
  },

  view_button: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  border: {
    borderWidth: 1,
    borderColor: '#fff',
    width: dimensions.width / 3.3 }
  }
)

export default styles