import * as React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

export default ({ navigation, isWeb }) =>
  <ImageBackground
    source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/backgroundMobile/3.jpg")}
    style={styles.container} >
  </ImageBackground >



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

