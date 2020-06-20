import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { sizeNormalize, adaptImageWidth } from '../../constants/layout'
import colors from '../../constants/colors'
import ReadMore from 'react-native-read-more-text'

export default ({ item, isWeb }) => {
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
                    source={require('../../../assets/images/icon_red.png')} />
                <Text style={ItemStyle().title}>{item.title}</Text>
                <Text style={ItemStyle().subTitle}>{item.subtitle}</Text>
                <View style={ItemStyle().textWrapper}>
                    <ReadMore
                        numberOfLines={3}
                        renderTruncatedFooter={renderTruncatedFooter}
                        renderRevealedFooter={renderRevealedFooter}>
                        <Text style={ItemStyle().description}>{item.description}</Text>
                    </ReadMore>
                </View>
            </View>
        )
    return null
}

const renderTruncatedFooter = (handlePress) => {
    return (
        <Text style={ItemStyle().revealedFooter} onPress={handlePress}>
            Leer más
        </Text>
    )
}

const renderRevealedFooter = (handlePress) => {
    return (
        <Text style={ItemStyle().revealedFooter} onPress={handlePress}>
            Ocultar
        </Text>
    )
}


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
        fontSize: sizeNormalize(18),
        fontWeight: "bold",
        margin: '2%',
        marginTop: '0%',
    },
    textWrapper: {
        margin: '3%',
        marginTop: '0%',
    },
    description: {
        color: colors.white,
        fontSize: sizeNormalize(15),
    },
    logo: {
        width: sizeNormalize(30),
        height: sizeNormalize(30),
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        marginTop: sizeNormalize(-40),
    },
    revealedFooter: {
        color: colors.primary,
        marginTop: '1%'
    }
})