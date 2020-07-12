import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { sizeNormalize, width, height } from '../../constants/layout'
import colors from '../../constants/colors'
import Carousel from 'react-native-banner-carousel'

const renderPage = (image, index, isWeb) =>
    <View key={index}>
        <Image style={styles(isWeb).customImage} source={{ uri: image }} />
    </View>


export default ({ item, isWeb }) => 
    <View style={styles(isWeb).container}>
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={width/1.1}
        >
            {item.map((image, index) => renderPage(image, index, isWeb))}
        </Carousel>
    </View>


const styles = (isWeb) => StyleSheet.create({
    container: {
        flex:1,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    customImage: {
        width: width/1.1,
        height: isWeb? height/1.3 : height/2,
        borderRadius: 10,
        resizeMode: 'contain'
    },
})
