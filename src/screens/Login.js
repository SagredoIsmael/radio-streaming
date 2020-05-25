import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { MAIN } from '../navigation/Navigator'

export default ({navigate}) =>
  <View style={styles.container}>
    <Text style={styles.text}>
      LOGIN SCREEN
  </Text>
    <Button
      title="Go to next screen"
      onPress={() => navigate(MAIN)}
    />
  </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black'
  }
})
