import React, { useEffect } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import List from '../components/list/List'

export default ({ navigate, isWeb, fetchDataBlog, data, error, isLoading }) => {
  useEffect(() => fetchDataBlog(), [])
  return (
    <ImageBackground
      source={isWeb ? require("../../assets/images/backgroundWeb/3.jpg") : require("../../assets/images/backgroundMobile/3.jpg")}
      style={styles.container} >
      {!isLoading &&
        <List isWeb={isWeb} data={data} isMain/>}
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