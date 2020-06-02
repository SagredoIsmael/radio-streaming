import * as React from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, Platform } from 'react-native'

export default ({ navigation }) => {
  const isWeb = Platform.OS == 'web'
  return (
    <ImageBackground
    source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/backgroundMobile.jpg")}
    style={styles.container} >
    <Text style={styles.text}>
      EVENTS SCREEN
  </Text>
    <Button
      title="Go back"
      onPress={() => navigation.goBack()}
    />
    <Button
      title="Open Drawer"
      onPress={() => navigation.toggleDrawer()}
    />
    <Button
      title="Jump to Map"
      onPress={() => navigation.navigate('CHAT')}
    />
  </ImageBackground >
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white'
  },

})

