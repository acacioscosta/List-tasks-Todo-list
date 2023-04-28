import { StyleSheet } from 'react-native'
import { colors } from '../../global_styles'

const styles = StyleSheet.create({
  description: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 10
  },

  done: {
    color: 'white',
    fontWeight: '400',
    textDecorationLine: 'line-through',
    fontSize: 18,
    marginLeft: 10
  },

  view_item: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 14,
    borderRadius: 8,
    borderWidth: .6,
    borderColor: colors.secondary
  },
})

export default styles