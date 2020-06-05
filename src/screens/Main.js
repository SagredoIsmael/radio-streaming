import * as React from 'react'
import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native'
import { sizeNormalize } from '../constants/layout'
import colors from '../constants/colors'

export default ({ navigate, isWeb }) =>
  <ImageBackground
    source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/provisional/2.jpg")}
    style={styles().container} >
    <ScrollView style={styles().scrollView} >
     
    </ScrollView>
  </ImageBackground>



const styles = (isWeb) => StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
 
})
