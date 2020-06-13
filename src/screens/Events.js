import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView, View, FlatList, Text, Image } from 'react-native'
import colors from '../constants/colors'
import { sizeNormalize, adaptImageWidth } from '../constants/layout'


export default ({ navigate, isWeb, fetchDataBlog, data, error, isLoading }) => {
  useEffect(() => fetchDataBlog(), [])
  return (
    <ImageBackground
      source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/provisional/4.jpg")}
      style={styles.container} >
      {!isLoading &&
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={({ item }) => <Item item={item} isWeb={isWeb} />}
          keyExtractor={item => item.title}
        />}
    </ImageBackground>
  )
}



function Item({ item, isWeb }) {
  const [dimension, setDimension] = useState(null)
  useEffect(() => {
    Image.getSize(item.photo, (width, height) => { setDimension({ width, height }) })
  }, [])

  const finalDimension = dimension ?
    adaptImageWidth(dimension, isWeb)
    :
    null

  if (finalDimension)
    return (
      <View
        style={ItemStyle(finalDimension.width).container}>
        <Image
          style={ItemStyle(finalDimension.width, finalDimension.height, isWeb).image}
          source={{ uri: item.photo }} />
        <Image
          style={ItemStyle(finalDimension.width).logo}
          source={require('../../assets/images/provisional/icon.png')} />
        <Text style={ItemStyle().title}>{item.title}</Text>
        <Text style={ItemStyle().subTitle}>{item.subtitle}</Text>
        <Text style={ItemStyle().subTitle}>{item.little_description}</Text>
      </View>
    )
  return null
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatList: {
    width: '100%'
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const ItemStyle = (width, height, isWeb) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    borderColor: colors.white,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    margin: '5%',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
    borderColor: colors.white,
    borderWidth: isWeb ? 1 : 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: isWeb ? 10 : 5,
    borderTopRightRadius: isWeb ? 10 : 5,
  },
  title: {
    color: colors.primary,
    fontSize: sizeNormalize(26),
    margin: '3%',
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.white,
    fontSize: sizeNormalize(15),
    margin: '3%',
    marginTop: '0%',
    fontWeight: "bold",
  },
  description: {
    color: colors.white,
    fontSize: sizeNormalize(12),
    margin: '3%',
    marginTop: '0%'
  },
  logo: {
    width: sizeNormalize(24),
    height: sizeNormalize(24),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginTop: sizeNormalize(-20),
  },
})