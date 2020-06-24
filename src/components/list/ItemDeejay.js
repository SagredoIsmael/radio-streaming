import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { sizeNormalize } from '../../constants/layout'
import colors from '../../constants/colors'


export default ({ item, isWeb }) => 
    <View
        style={ItemStyle().container}>
        <Image
            style={ItemStyle(isWeb).image}
            source={{ uri: item.photo }} />
        <Text style={ItemStyle().title}>{item.title}</Text>
        <Text style={ItemStyle().subTitle}>{item.subtitle}</Text>
    </View>



const ItemStyle = (isWeb) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        borderColor: colors.white,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 10,
        margin: '5%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    image: {
        width: '20%',
        height: sizeNormalize(30),
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
        fontSize: sizeNormalize(18),
        fontWeight: "bold",
        margin: '2%',
        marginTop: '0%',
    },
})