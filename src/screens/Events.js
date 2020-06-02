import * as React from 'react'
import { StyleSheet, ImageBackground, Platform } from 'react-native'

export default ({ navigation }) => {
  const isWeb = Platform.OS == 'web'
  return (
    <ImageBackground
    source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/backgroundMobile.jpg")}
    style={styles.container} >
    
  </ImageBackground >
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

