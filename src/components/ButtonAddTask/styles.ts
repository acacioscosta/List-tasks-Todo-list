import { StyleSheet } from 'react-native'
import { dimensions } from '../../global_styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 16,
    fontWeight: '400'
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