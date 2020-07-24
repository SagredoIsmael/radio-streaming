import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { sizeNormalize, width, height } from '../../constants/layout'
import colors from '../../constants/colors'


export default ({ item, isWeb }) => {
    const [numberLines, setnumberLines] = useState(3)

    const isDescriptionExpanded = numberLines === 0

    return (
        <View
            style={ItemStyle(isWeb).container}>
            <Image
                style={ItemStyle(isWeb).image}
                source={{ uri: item.photo }} />
            <Image
                style={ItemStyle(isWeb).logo}
                source={require('../../../assets/images/icon_red.png')} />
            <Text style={ItemStyle().title}>{item.title}</Text>
            <Text style={ItemStyle().subTitle}>{item.subtitle}</Text>
            <TouchableOpacity
                onPress={() => setnumberLines(isDescriptionExpanded ? 3 : 0)}
                style={ItemStyle().descriptionWrapper}>
                <Text numberOfLines={numberLines} ellipsizeMode='tail' style={ItemStyle().description}>{item.description}</Text>
                <Text style={ItemStyle(isWeb).readMore}>{isDescriptionExpanded ? 'Leer menos' : 'Leer más'}</Text>
            </TouchableOpacity>
        </View>
    )
}


const ItemStyle = (isWeb) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%',
        width: isWeb ? width / 1.7 : width / 1.1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    image: {
        width: isWeb ? width / 1.7 : width / 1.1,
        height: isWeb ? height / 1.5 : height / 3,
        borderRadius: 10,
        resizeMode: 'stretch',
        borderTopLeftRadius: isWeb ? 10 : 5,
        borderTopRightRadius: isWeb ? 10 : 5,
    },
    title: {
        color: colors.primary,
        fontSize: sizeNormalize(26),
        margin: '1%',
        fontWeight: "bold",
        textAlign: 'justify'
    },
    subTitle: {
        color: colors.white,
        fontSize: sizeNormalize(18),
        fontWeight: "bold",
        marginBottom: '1%',
        marginLeft: '3%',
        marginRight: '3%',
        textAlign: 'justify'
    },
    descriptionWrapper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        color: colors.white,
        fontSize: sizeNormalize(15),
        textAlign: 'justify',
        marginLeft: '3%',
        marginRight: '3%',
        marginBottom: '1%'
    },
    readMore: {
        width: '100%',
        color: colors.primary,
        fontSize: sizeNormalize(16),
        fontWeight: "bold",
        marginBottom: isWeb ? '2%' : '0%',
        textAlign: 'center'
    },
    logo: {
        width: sizeNormalize(30),
        height: sizeNormalize(30),
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        marginTop: isWeb ? sizeNormalize(-35) : sizeNormalize(-25),
    },
    revealedFooter: {
        color: colors.primary,
        marginTop: '1%'
    }
})