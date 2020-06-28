import * as React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { sizeNormalize, width } from '../../constants/layout'
import colors from '../../constants/colors'
import { connectPlatform } from '../../redux/HOC/connectPlatform'
import { connectNavigation } from "../../redux/HOC/connectNavigation"
import { screens } from '../../constants/navigation'


const Header = ({navigate, isWeb }) =>
    <TouchableOpacity
        style={styles(isWeb).container}
        onPress={() => navigate(screens.MAIN)}>
        <Image
            style={styles(isWeb).image}
            source={require('../../../assets/images/citrika_white.png')} />
    </TouchableOpacity>


const styles = (isWeb) => StyleSheet.create({
        container: {
            width: isWeb? width : '100%',
        },
        image: {
            alignSelf: isWeb? 'center' : 'flex-start',
            width: sizeNormalize(200),
            height: sizeNormalize(90),
            resizeMode: 'contain',
            marginLeft: isWeb? '-10%' : '5%'
        }
    })

    export default connectPlatform(connectNavigation(Header))