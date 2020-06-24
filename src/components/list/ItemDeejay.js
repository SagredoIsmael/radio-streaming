import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
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
            <Text style={styles().textTitle}>
                {item.name}
            </Text>
            <View style={styles(isWeb).socialDrawerItem}>
                {item.instagram && <Icon onPress={() => window.open(item.instagram, '_blank')} name={'logo-instagram'} color={colors.white} colorHovered={colors.primary} size={50} />}
                {item.facebook && <Icon onPress={() => window.open(item.facebook, '_blank')} name={'logo-facebook'} color={colors.white} colorHovered={colors.primary} size={50} />}
                {item.twitter && <Icon onPress={() => window.open(item.twitter, '_blank')} name={'logo-twitter'} color={colors.white} colorHovered={colors.primary} size={50} /> }
            </View>
        </View>
    </View>



const styles = (isWeb) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        width: isWeb? '60%' : '90%',
        alignItems: 'center',
        alignSelf: 'center',
        margin: '2%',
        flexDirection: 'row'
    },
    image: {
        width: '40%',
        height: '80%',
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
        marginBottom: '30%',
        width: '30%',
        justifyContent: 'space-between'
    },
    textTitle: {
        color: colors.white,
        fontSize: sizeNormalize(40),
        fontWeight: "bold",
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: colors.lightBlack,
        margin: '5%',
        marginTop: '30%',
    },
})