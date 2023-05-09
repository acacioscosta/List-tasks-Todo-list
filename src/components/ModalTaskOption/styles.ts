import { StyleSheet } from 'react-native'
import { colors, dimensions } from '../../global_styles'

const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    margin: 0,
    justifyContent: 'flex-end'
  },

  view_content: {
    backgroundColor: colors.secondary,
    padding: 14
  },

  view_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: 10
  },

  view_icon: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 12
  },

  text: {
    marginLeft: 22,
    color: colors.primary,
    fontSize: 28
  }
})

export default styles