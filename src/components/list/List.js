import React, { useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Item from './Item'

const List = ({ data, isWeb, isMain }) => 
  <FlatList
    style={styles.flatList}
    data={data}
    renderItem={({ item }) => <Item item={item} isWeb={isWeb} />}
    keyExtractor={item => item.title}
  />


const styles = StyleSheet.create({
  flatList: {
    width: '100%'
  },
})


export default List