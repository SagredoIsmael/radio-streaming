import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, Linking } from 'react-native'
import { sizeNormalize } from '../../constants/layout'
import colors from '../../constants/colors'
import Icon from '../UI/Icon'
import constants from '../../constants/fetch'


export default ({ item, isWeb }) =>
    <View
        style={styles(isWeb).container}>
        <Image
            style={styles(isWeb).image}
            source={{ uri: item.photo }} />
        <View style={styles(isWeb).infoWrapper}>
            <TouchableOpacity
                onPress={() => item.web && Linking.openURL(item.web)}>
                <Text style={styles(isWeb).textTitle}>
                    {item.name}
                </Text>
            </TouchableOpacity>
            <View style={styles(isWeb).socialDrawerItem}>
                {item.instagram && <Icon onPress={() => Linking.openURL(item.instagram)} name={'logo-instagram'} color={colors.white} colorHovered={colors.primary} size={30} />}
                {item.facebook && <Icon onPress={() => Linking.openURL(item.facebook)} name={'logo-facebook'} color={colors.white} colorHovered={colors.primary} size={30} />}
                {item.twitter && <Icon onPress={() => Linking.openURL(item.twitter)} name={'logo-twitter'} color={colors.white} colorHovered={colors.primary} size={30} />}
            </View>
        </View>
    </View>



const styles = (isWeb) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        width: isWeb ? '60%' : '90%',
        alignItems: 'center',
        alignSelf: 'center',
        margin: '2%',
        flexDirection: 'row'
    },
    image: {
        width: '40%',
        height: isWeb ? sizeNormalize(250) : sizeNormalize(120),
        resizeMode: 'stretch',
        borderColor: colors.white,
        borderWidth: 1,
        margin: '3%',
    },
    infoWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialDrawerItem: {
        flexDirection: 'row',
        marginBottom: isWeb ? '30%' : '20%',
        width: '30%',
        justifyContent: 'space-between'
    },
    textTitle: {
        color: colors.white,
        fontSize: isWeb ? sizeNormalize(40) : sizeNormalize(20),
        fontWeight: "bold",
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: colors.lightBlack,
        margin: '5%',
        marginTop: isWeb ? '30%' : '20%',
    },
})