import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { sizeNormalize, adaptImageWidth, width, height } from '../../constants/layout'
import colors from '../../constants/colors'


export default ({ item, isWeb }) => {
    const [dimension, setDimension] = useState(null)
    const [numberLines, setnumberLines] = useState(3)

    useEffect(() => {
        item.photo && Image.getSize(item.photo, (width, height) => {
            setDimension(adaptImageWidth({ width, height }, isWeb))
        }, (error) => {
            console.error(`Couldn't get the image size: ${error}`)
            if (!isWeb)
                setDimension(adaptImageWidth({ width: width / 1.2, height: height / 4 }))
            else
                setDimension(adaptImageWidth({ width: width / 1.5, height: height / 2 }))
        })
    }, [])

    const isDescriptionExpanded = numberLines === 0

    if (dimension)
        return (
            <View
                style={ItemStyle(dimension.width).container}>
                <Image
                    style={ItemStyle(dimension.width, dimension.height, isWeb).image}
                    source={{ uri: item.photo }} />
                <Image
                    style={ItemStyle(dimension.width, null, isWeb).logo}
                    source={require('../../../assets/images/icon_red.png')} />
                <Text style={ItemStyle().title}>{item.title}</Text>
                <Text style={ItemStyle().subTitle}>{item.subtitle}</Text>
                <Text numberOfLines={numberLines} ellipsizeMode='tail' style={ItemStyle().description}>{item.description}</Text>
                <TouchableOpacity
                    onPress={() => setnumberLines(isDescriptionExpanded ? 3 : 0)}>
                    <Text style={ItemStyle(null, null, isWeb).readMore}>{isDescriptionExpanded ? 'Leer menos' : 'Leer más'}</Text>
                </TouchableOpacity>
            </View>
        )
    return null
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
        textAlign: 'justify'
    },
    subTitle: {
        color: colors.white,
        fontSize: sizeNormalize(18),
        fontWeight: "bold",
        margin: '2%',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '0%',
        textAlign: 'justify'
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
        marginLeft: '3%',
        fontWeight: "bold",
        textAlign: 'left',
        marginBottom: isWeb ? '2%' : '0%'
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