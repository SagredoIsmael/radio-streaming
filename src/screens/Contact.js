import * as React from 'react'
import { StyleSheet, ImageBackground, Platform } from 'react-native'

export default ({ navigate }) => {
  const isWeb = Platform.OS == 'web'
  return (
    <ImageBackground
      source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/provisional/5.jpg")}
      style={styles.container} >
    </ImageBackground>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
