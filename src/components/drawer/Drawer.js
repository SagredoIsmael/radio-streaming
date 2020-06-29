import * as React from 'react'
import { DrawerItem } from '@react-navigation/drawer'
import { StyleSheet, View, Linking, Image } from 'react-native'
import map from 'lodash/map'
import colors from '../../constants/colors'
import { sizeNormalize } from '../../constants/layout'
import Icon from '../UI/Icon'
import { screens } from '../../constants/navigation'
import constants from '../../constants/fetch'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { Hoverable } from 'react-native-web-hooks'
import { connectPlatform } from '../../redux/HOC/connectPlatform'

const { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } = screens

const drawerItems = [
    {
        label: MAIN,
        icon: () => <AntDesign color={colors.white} size={sizeNormalize(22)} name={'home'} />
    },
    {
        label: EVENTS,
        icon: () => <Feather color={colors.white} size={sizeNormalize(22)} name={'calendar'} />
    },
    {
        label: DEEJAYS,
        icon: () => <Feather color={colors.white} size={sizeNormalize(22)} name={'sliders'} />
    },
    {
        label: CONTACT,
        icon: () => <AntDesign color={colors.white} size={sizeNormalize(22)} name={'mail'} />
    },
    {
        label: LEGAL,
        icon: () => <Feather color={colors.white} size={sizeNormalize(22)} name={'file-text'} />
    }
]

const Drawer = ({ navigation, isMobile }) =>
    <View style={styles().drawerContainer}>
        <View>
            {map(drawerItems, drawerItem =>
                <Hoverable>
                    {isHovered => (
                        <DrawerItem
                            key={drawerItem.label}
                            onPress={() => navigation.navigate(drawerItem.label)}
                            labelStyle={styles().labelDrawer}
                            style={styles(isHovered).drawerItem}
                            {...drawerItem} />
                    )}
                </Hoverable>
            )}
        </View>
        {!isMobile && <View style={styles().storesWrapper}>
            <Image
                style={styles().image}
                source={require('../../../assets/images/googlePlay.png')} />
            <Image
                style={styles().image}
                source={require('../../../assets/images/appleStore.png')} />
        </View>
        }
        <View style={styles().socialDrawerItem}>
            <Icon onPress={() => Linking.openURL(constants.INSTAGRAM)} name={'logo-instagram'} color={colors.white} colorHovered={colors.primary} size={30} />
            <Icon onPress={() => Linking.openURL(constants.FACEBOOK)} name={'logo-facebook'} color={colors.white} colorHovered={colors.primary} size={30} />
            <Icon onPress={() => Linking.openURL(constants.TWITTER)} name={'logo-twitter'} color={colors.white} colorHovered={colors.primary} size={30} />
        </View>
    </View>


const styles = (isHovered) => StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'space-between',
        padding: '7%',
        paddingTop: '20%',
    },
    labelDrawer: {
        color: colors.white,
        fontSize: sizeNormalize(16)
    },
    drawerItem: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        marginTop: '5%',
        backgroundColor: isHovered ? colors.primary : colors.black
    },
    socialDrawerItem: {
        marginLeft: '5%',
        marginRight: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    storesWrapper: {
        margin: '3%',
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%',
        height: '30%',
        justifyContent: 'space-between'
        
    },
    image: {
        width: '95%',
        height: '45%',
        resizeMode: 'contain',
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
    },
})

export default connectPlatform(Drawer)