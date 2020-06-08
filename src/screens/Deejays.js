import * as React from 'react'
import { StyleSheet, ImageBackground, SafeAreaView, View, FlatList, Text } from 'react-native'
import colors from '../constants/colors'

const DATA = [
  { id: 1, title: 'Title1', subTitle: 'subTitle', photoUrl: 'https://www.larinconada.es/contenidos/noticias/18/9428-001-1-2.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
  { id: 2, title: 'Title2', subTitle: 'subTitle', photoUrl: 'https://carniceriagourmet.com/wp-content/uploads/2019/06/Carniceria-Gourmet-Barcelona-720x481.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
  { id: 3, title: 'Title3', subTitle: 'subTitle', photoUrl: 'https://estaticos.qdq.com/swdata/photos/744/744006001/1994dc52e50e4ba087781b06ca22db19.jpg', price: '2.45€' },
  { id: 4, title: 'Title4', subTitle: 'subTitle', photoUrl: 'https://www.larinconada.es/contenidos/noticias/18/9428-001-1-2.jpg', description: 'Description blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', logo: 'https://www.clipartmax.com/middle/m2i8N4N4Z5G6b1Z5_red-fire-flame-logo/', price: '2.45€' },
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </ImageBackground>


function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listWrapper: {
    flex: 1,
  },
  item: {
    backgroundColor: colors.lightBlack,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius:10,
    margin: '10%',
  },
  title: {
    fontSize: 32,
  },
})
