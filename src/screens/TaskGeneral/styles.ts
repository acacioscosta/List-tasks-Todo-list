import { StyleSheet } from 'react-native'
import { styles as global_styles, colors } from '../../global_styles'

const styles = StyleSheet.create({
  container: global_styles.container,

  text_category: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 20
  }
})

export default styles