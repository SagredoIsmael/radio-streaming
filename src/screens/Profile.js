import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Header from '../components/header/Header'

export default ({ fetchLogin, token }) =>
  <View style={styles.container}>
    <Header />
    <Text style={styles.text}>
      PROFILE SCREEN
    </Text>
    <Button
      title="fetch"
      onPress={() => fetchLogin(bodyFetch)}
    />
    {token &&
      <Text style={styles.text}>
        Example token is : {token}
      </Text>
    }

  </View>

const bodyFetch = {
  login: 'demo',
  password: 'demo'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  text: {
    color: 'white'
  }
})
