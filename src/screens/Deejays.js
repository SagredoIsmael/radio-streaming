import * as React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

export default ({ navigate, isWeb }) =>
  <ImageBackground
    source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/provisional/4.jpg")}
    style={styles.container} >
  </ImageBackground>



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
