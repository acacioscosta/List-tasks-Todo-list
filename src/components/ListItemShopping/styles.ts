import { StyleSheet } from 'react-native'
import { colors } from '../../global_styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 24
  },

  description: {
    color: colors.secondary,
    fontWeight: '400',
    fontSize: 24,
    marginBottom: 10
  },

  done: {
    color: colors.secondary,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    fontSize: 24,
    marginBottom: 10
  },

  view_item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '82%',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.secondary
  },

  view_amount: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '18%',
  },

  text_values: {
    color: colors.secondary,
    marginVertical: 2
  },

  text_amount: {
    color: colors.secondary,
    fontSize: 24,
    textAlign: 'center'
  }
})

export default styles