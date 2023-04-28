import { StyleSheet } from 'react-native'
import { dimensions } from '../../global_styles'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  title: {
    color: 'white',
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