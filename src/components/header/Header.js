import * as React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { sizeNormalize } from '../../constants/layout'
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
            width: isWeb? '20rem' : sizeNormalize(200),
            height: isWeb? '25rem' : sizeNormalize(90),
        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            marginLeft: '5%'
        }
    })

    export default connectPlatform(connectNavigation(Header))