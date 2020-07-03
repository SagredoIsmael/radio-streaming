import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { sizeNormalize, width, height } from '../../constants/layout'
import colors from '../../constants/colors'
import Carousel from 'react-native-banner-carousel'

const renderPage = (image, index) =>
    <View key={index}>
        <Image style={styles.customImage} source={{ uri: image }} />
    </View>


export default ({ item }) => 
    <View style={styles.container}>
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={width/1.4}
        >
            {item.map((image, index) => renderPage(image, index))}
        </Carousel>
    </View>




const styles = StyleSheet.create({
    container: {
        flex:1,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        margin: 3,
        width: 15,
        height: 15,
        opacity: 0.9,
        fontWeight: "bold",
        fontSize: sizeNormalize(26),
        alignItems: 'center',
        justifyContent: 'center',
    },
    customImage: {
        width: width/1.4,
        height: height/1.5,
        borderRadius: 10,
        resizeMode: 'contain'
    },
})
