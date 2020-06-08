import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView, View, FlatList, Text, Image } from 'react-native'
import colors from '../constants/colors'
import { sizeNormalize } from '../constants/layout'


const DATA = [
  { id: 1, title: 'Title1', subTitle: 'subTitle', photoUrl: 'https://www.larinconada.es/contenidos/noticias/18/9428-001-1-2.jpg', little_description: 'Description blablablabla', big_description: 'Description blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablabla', hasWaterMark: true, price: '2.45€' },
  { id: 2, title: 'Title2', subTitle: 'subTitle', photoUrl: 'https://carniceriagourmet.com/wp-content/uploads/2019/06/Carniceria-Gourmet-Barcelona-720x481.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
  { id: 3, title: 'Title3', subTitle: 'subTitle', photoUrl: 'https://estaticos.qdq.com/swdata/photos/744/744006001/1994dc52e50e4ba087781b06ca22db19.jpg', price: '2.45€' },
  { id: 4, title: 'Title4', subTitle: 'subTitle', photoUrl: 'data:image/jpeg;base64,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', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
  { id: 5, title: 'Title5', subTitle: 'subTitle', photoUrl: 'https://www.larinconada.es/contenidos/noticias/18/9428-001-1-2.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
  { id: 6, title: 'Title2', subTitle: 'subTitle', photoUrl: 'https://carniceriagourmet.com/wp-content/uploads/2019/06/Carniceria-Gourmet-Barcelona-720x481.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
  { id: 7, title: 'Title3', subTitle: 'subTitle', photoUrl: 'https://estaticos.qdq.com/swdata/photos/744/744006001/1994dc52e50e4ba087781b06ca22db19.jpg', price: '2.45€' },
  { id: 8, title: 'Title6', subTitle: 'subTitle', photoUrl: 'https://carniceriagourmet.com/wp-content/uploads/2019/06/Carniceria-Gourmet-Barcelona-720x481.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
  { id: 9, title: 'Title7', subTitle: 'subTitle', photoUrl: 'https://estaticos.qdq.com/swdata/photos/744/744006001/1994dc52e50e4ba087781b06ca22db19.jpg', price: '2.45€' },
  { id: 10, title: 'Title1', subTitle: 'subTitle', photoUrl: 'https://www.larinconada.es/contenidos/noticias/18/9428-001-1-2.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
  { id: 11, title: 'Title2', subTitle: 'subTitle', photoUrl: 'https://carniceriagourmet.com/wp-content/uploads/2019/06/Carniceria-Gourmet-Barcelona-720x481.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
  { id: 12, title: 'Title8', subTitle: 'subTitle', photoUrl: 'https://www.larinconada.es/contenidos/noticias/18/9428-001-1-2.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
]

export default ({ navigate, isWeb }) =>
  <ImageBackground
    source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/provisional/4.jpg")}
    style={styles.container} >
    <SafeAreaView style={styles.listWrapper}></SafeAreaView>
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      style={styles.flatList}
      data={DATA}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => item.id}
    />
  </ImageBackground>


function Item({ item }) {
  const [dimension, setDimension] = useState(null)
  useEffect(() => {
    Image.getSize(item.photoUrl, (width, height) => { setDimension({ width, height }) })
  }, [])

  const finalDimension = dimension ?
    dimension.width < 400 ?
      { width: dimension.width, height: dimension.height }
      :
      { width: dimension.width / 2, height: dimension.height / 2 }
    :
    null

  if (finalDimension)
    return (
      <View
        style={ItemStyle(finalDimension.width).container}>
        <Image
          style={ItemStyle(finalDimension.width, finalDimension.height).image}
          source={{ uri: item.photoUrl }} />
        {item.hasWaterMark && <Image
          style={ItemStyle(finalDimension.width).logo}
          source={require('../../assets/images/provisional/icon.png')} />}
        <Text style={ItemStyle().title}>{item.title}</Text>
        <Text style={ItemStyle().subTitle}>{item.subTitle}</Text>
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

const ItemStyle = (width, height) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    margin: '5%',
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
    borderColor: colors.white,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    marginTop: sizeNormalize(-24)
  },
})