import { StyleSheet } from 'react-native'
import { colors } from '../../../global_styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginHorizontal: 18,
    marginVertical: 5
  },

  view_category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  text_view_category: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: '300',
    fontStyle: 'italic'
  },

  title: {
    fontSize: 28,
    color: colors.secondary,
    fontWeight: '400',
    textAlign: 'justify'
  }
})

export default styles