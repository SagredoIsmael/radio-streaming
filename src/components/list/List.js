import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Item from './Item'
import Publi from './Publi'

const List = ({ blogs, publi, isWeb }) => {
  const itemsList = blogs.slice(0)
  itemsList.splice(0, 0, publi)

  return (
    <FlatList
      style={styles.flatList}
      data={itemsList}
      renderItem={({ item }) => {
        if (!item) return null
        if (item.only_in == 'eventos' && publi) return null
        if (item.only_in == 'inicio' && !publi) return null
        if (Array.isArray(item) && item.length > 0) return <Publi publi={item} />
        return <Item item={item} isWeb={isWeb} />
      }}
      keyExtractor={(item, index) => index}
    />
  )
}



const styles = StyleSheet.create({
  flatList: {
    width: '100%'
  }
})


export default List