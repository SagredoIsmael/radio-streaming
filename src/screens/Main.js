import React, { useEffect } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import List from '../components/list/List'

export default ({ navigate, isWeb, fetchDataBlog, data, error, isLoading }) => {
  useEffect(() => fetchDataBlog(), [])
  return (
    <ImageBackground
      source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/provisional/4.jpg")}
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