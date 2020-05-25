import React from 'react'
import { View, StyleSheet } from 'react-native'
import DrawerTrigger from './DrawerTrigger'
import colors from '../../constants/colors'
import { StatusBarHeight } from '../../constants/layout'

export default () =>
  <View style={styles.header}>
    <DrawerTrigger />
  </View>

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    marginTop: StatusBarHeight,
    width: '100%',
    height: '8%'
  }
})
