import React, { useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Item from './Item'

const List = ({ data, isWeb, isMain }) =>
  <FlatList
    style={styles.flatList}
    data={data}
    renderItem={({ item }) => {
      if (item.only_in){
        if (item.only_in == 'eventos' && isMain) return null
        if (item.only_in == 'inicio' && !isMain) return null
      }
      return <Item item={item} isWeb={isWeb} />
    }}
    keyExtractor={item => item.title}
  />


const styles = StyleSheet.create({
  flatList: {
    width: '100%'
  },
})


export default List