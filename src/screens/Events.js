import React, {useEffect} from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import List from '../components/list/List'

export default ({ navigate, isWeb, blogs, blogsError, fetchDataBlog }) => {
  useEffect(() => {
    if (blogs.length == 0) fetchDataBlog()
  }, [])
  return (
    <ImageBackground
      source={isWeb ? require("../../assets/images/backgroundWeb/3.jpg") : require("../../assets/images/backgroundMobile/3.jpg")}
      style={styles.container} >
      <List isWeb={isWeb} blogs={blogs} />
    </ImageBackground>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})