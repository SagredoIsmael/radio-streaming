import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Header from '../components/header/Header'

export default ({ navigation }) =>
  <View style={styles.container}>
    <Header />
    <Text style={styles.text}>
      MAIN SCREEN
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
  </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  text: {
    color: 'white'
  }
})

