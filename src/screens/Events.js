import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView, View, FlatList, Text, Image } from 'react-native'
import colors from '../constants/colors'
import { sizeNormalize, adaptImageWidth } from '../constants/layout'


const DATA = [
  { id: 1, title: 'Sesión 14 de Junio', subtitle: 'Disfruta de nuestra sesión en directo CitrikaFM', photo: 'https://www.discjockeys.es/wp-content/uploads/2019/06/Top-30-Los-mejores-Dj-Holandeses-en-2019-696x392.jpg', little_description: 'El día 14 de Junio a las 11:00 comenzaremos con una sesión de DJ .. en directo. Nos pondrá las pilas para el fin de semana!', extensive_description: 'Description blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablabla' },
  { id: 3, title: '¡En directo!', subtitle: 'CitrikaFM en Directo', photo: 'https://rasd.tv/uploads/images/channel_14_1580841421_thumb.jpg', little_description: 'El día 14 de Junio a las 11:00 comenzaremos con una sesión de DJ .. en directo. Nos pondrá las pilas para el fin de semana!', extensive_description: 'Description blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablablaDescription blablablabla'},
]


export default ({ navigate, isWeb }) =>
  <ImageBackground
    source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/provisional/4.jpg")}
    style={styles.container} >
    <FlatList
      style={styles.flatList}
      data={DATA}
      renderItem={({ item }) => <Item item={item} isWeb={isWeb} />}
      keyExtractor={item => item.id}
    />
  </ImageBackground>


function Item({ item, isWeb }) {
  const [dimension, setDimension] = useState(null)
  useEffect(() => {
    Image.getSize(item.photoUrl, (width, height) => { setDimension({ width, height }) })
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
          source={{ uri: item.photoUrl }} />
        <Image
          style={ItemStyle(finalDimension.width).logo}
          source={require('../../assets/images/provisional/icon.png')} />
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
    marginLeft: sizeNormalize(-1)
  },
})