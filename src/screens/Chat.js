import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../components/header/Header'

export default () =>
  <View style={styles.container}>
    <Header />
    <Text>
      CHAT SCREEN
  </Text>
  </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

