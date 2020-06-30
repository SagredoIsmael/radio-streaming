import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Item from './Item'
import ItemDeejay from './ItemDeejay'
import ItemPubli from './ItemPubli'

const getItemsList = (blogs, publi, deejays) => {
  switch (true) {

    case deejays != null:
      return deejays

    case publi != null:
      const publiWithBlogs = blogs.slice(0)
      publiWithBlogs.splice(0, 0, publi)
      return publiWithBlogs

    default:
      return blogs
  }
}

const List = ({ blogs, publi, deejays, isWeb, isMobile }) => {

  return (
    <FlatList
      style={styles.flatList}
      data={getItemsList(blogs, publi, deejays)}
      renderItem={({ item }) => {
        if (!item) return null
        if (item.only_in == 'eventos' && publi) return null
        if (item.only_in == 'inicio' && !publi) return null
        if (deejays) return <ItemDeejay item={item} isWeb={isWeb} isMobile={isMobile}/>
        if (Array.isArray(item) && item.length > 0) return <ItemPubli item={item} />
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