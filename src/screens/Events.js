import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import List from '../components/list/List'

export default ({ navigate, isWeb, data, error }) =>
  <ImageBackground
    source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/provisional/4.jpg")}
    style={styles.container} >
    <List isWeb={isWeb} data={data} />
  </ImageBackground>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})