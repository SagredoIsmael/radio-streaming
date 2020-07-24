import * as React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { sizeNormalize, width } from '../../constants/layout'
import colors from '../../constants/colors'
import { connectPlatform } from '../../redux/HOC/connectPlatform'
import { connectNavigation } from "../../redux/HOC/connectNavigation"
import { screens } from '../../constants/navigation'


const Header = ({navigate, isWeb, isIOS }) =>
    <TouchableOpacity             
        style={styles(isWeb, isIOS).container}
        onPress={() => navigate(screens.MAIN)}>
        <Image
            style={styles(isWeb, isIOS).image}
            source={require('../../../assets/images/citrika_white.png')} />
    </TouchableOpacity>


const styles = (isWeb, isIOS) => StyleSheet.create({
        container: {
            width: isWeb? width/1.1 : width/1.5,
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            width: width/2,
            height: sizeNormalize(50),
            resizeMode: 'contain',
        }
    })

    export default connectPlatform(connectNavigation(Header))