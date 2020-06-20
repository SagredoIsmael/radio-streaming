import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import List from '../components/list/List'

export default ({ navigate, isWeb, blogs, blogsError }) =>
  <ImageBackground
    source={isWeb ? require("../../assets/images/backgroundWeb/4.jpg") : require("../../assets/images/backgroundMobile/4.jpg")}
    style={styles.container} >
    <List isWeb={isWeb} blogs={blogs} />
  </ImageBackground>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})