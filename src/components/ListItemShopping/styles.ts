import { StyleSheet } from 'react-native'
import { colors } from '../../global_styles'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 14
  },

  description: {
    color: colors.secondary,
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 10
  },

  done: {
    color: colors.secondary,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    fontSize: 18,
    marginLeft: 10
  },

  view_item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.secondary
  },

  view_info:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },

  view_values: {
    flex: 1,
    alignItems: 'baseline',
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    marginHorizontal: 5,
    marginTop: 8
  },

  text_description: {
    color: colors.secondary,
    fontSize: 9
  },

  text_value: {
    color: colors.secondary,
    marginLeft: 6,
    fontSize: 20
  },

  view_amount: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  text_amount: {
    color: colors.secondary,
    fontSize: 18,
    textAlign: 'center'
  }
})

export default styles