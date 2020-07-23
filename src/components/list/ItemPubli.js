import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Linking } from 'react-native'
import { sizeNormalize, width, height } from '../../constants/layout'
import colors from '../../constants/colors'
import Carousel from 'react-native-banner-carousel'

const renderPage = (item, index, isWeb, isMobile) =>
    <TouchableOpacity
        key={index}
        onPress={() => item.web? isMobile? Linking.openURL(item.web) : window.open(item.web) : console.log('This publi hasnt web') }>
        <Image style={styles(isWeb).customImage} source={{ uri: item.photo }} />
    </TouchableOpacity >


export default ({ item, isWeb, isMobile }) =>
    <View style={styles(isWeb).container}>
        <Carousel
            autoplay
            autoplayTimeout={7000}
            loop
            index={0}
            pageSize={width / 1.1}
        >
            {item.map((image, index) => renderPage(image, index, isWeb, isMobile))}
        </Carousel>
    </View>


const styles = (isWeb) => StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center', 
        marginTop: isWeb ? 0 : -height / 20
    },
    customImage: {
        width: width / 1.1,
        height: isWeb ? height / 1.3 : height / 2,
        borderRadius: 10,
        resizeMode: 'contain',
    },
})
