import React, { useEffect }  from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import List from '../components/list/List'

export default ({ navigate, isWeb, deejays, error, isMobile, fetchDataDjs }) => {
  useEffect(() => {
    fetchDataDjs()
  }, [])
  return (
    <ImageBackground
        source={isWeb ? require("../../assets/images/backgroundWeb/3.jpg") : require("../../assets/images/backgroundMobile/3.jpg")}
        style={styles.container} >
        <List isWeb={isWeb} deejays={deejays} isMobile={isMobile} />
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

