import { Dimensions, StyleSheet } from "react-native"

export const colors = {
  primary: '#000',
  secondary: '#FFF'
}

export const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    width: dimensions.width,
    maxWidth: dimensions.width
  }
})