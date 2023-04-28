import { StyleSheet } from 'react-native'
import { colors } from '../../../global_styles'

const styles = StyleSheet.create({
  primary_button: {
    backgroundColor: colors.secondary,
    padding: 8,
    alignItems: 'center',
    borderRadius: 6,
    width: '100%'
  },

  primary_text_button: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '500'
  },
  
  secondary_button: {
    width: '100%',
    borderWidth: .6,
    borderColor: 'white',
    padding: 8,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 10
  },

  secondary_text_button: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: '300',
    fontStyle: 'italic'
  }
})

export default styles