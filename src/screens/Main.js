import React, { useEffect } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import List from '../components/list/List'

export default ({
  navigate,
  isWeb,
  fetchDataBlog,
  fetchDataPubli,
  fetchDataDjs,
  blogs,
  blogError,
  isBlogLoading,
  publi,
}) => {
  useEffect(() => {
    fetchDataBlog()
    fetchDataPubli()
    fetchDataDjs()
  }, [])
  return (
    <ImageBackground
      source={isWeb ? require("../../assets/images/backgroundWeb/3.jpg") : require("../../assets/images/backgroundMobile/3.jpg")}
      style={styles.container} >
      {!isBlogLoading &&
        <List isWeb={isWeb} blogs={blogs} publi={publi} />}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
})