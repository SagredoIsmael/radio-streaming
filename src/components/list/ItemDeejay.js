import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, Linking } from 'react-native'
import { sizeNormalize } from '../../constants/layout'
import colors from '../../constants/colors'
import Icon from '../UI/Icon'

export default ({ item, isWeb, isMobile }) =>
    <View
        style={styles(isWeb).container}>
        <Image
            style={styles(isWeb).image}
            source={{ uri: item.photo }} />
        <View style={styles(isWeb).infoWrapper}>
            <TouchableOpacity
                style={styles(isWeb).textWrapper}
                onPress={() => item.web? isMobile? Linking.openURL(item.web) : window.open(item.web) : console.log('This dj hasnt web') }>
                <Text style={styles(isWeb).textTitle}>
                    {item.name}
                </Text>
            </TouchableOpacity>
            <View style={styles(isWeb).socialDrawerItem}>
                {item.facebook && <Icon onPress={() => isMobile? Linking.openURL(item.facebook) : window.open(item.facebook)} name={'logo-facebook'} color={colors.white} colorHovered={colors.primary} size={30}  />}
                {item.instagram && <Icon onPress={() => isMobile? Linking.openURL(item.instagram) : window.open(item.instagram)} name={'logo-instagram'} color={colors.white} colorHovered={colors.primary} size={30} style={{marginLeft: '10%'}}/>}
                {item.twitter && <Icon onPress={() => isMobile? Linking.openURL(item.twitter) : window.open(item.twitter)} name={'logo-twitter'} color={colors.white} colorHovered={colors.primary} size={30} style={{marginLeft: '10%'}}/>}
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
        justifyContent: 'center',
        alignItems: 'center'

    },
    textWrapper:{
        flex:1,
        borderBottomWidth: 1,
        borderColor: colors.lightBlack,
        margin: '5%',
        marginTop: isWeb ? '30%' : '20%',
    },
    textTitle: {
        color: colors.white,
        fontSize: isWeb ? sizeNormalize(40) : sizeNormalize(20),
        fontWeight: "bold",
        textAlign: 'center',
    },
})