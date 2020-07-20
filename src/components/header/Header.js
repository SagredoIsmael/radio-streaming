import * as React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { sizeNormalize, width } from '../../constants/layout'
import colors from '../../constants/colors'
import { connectPlatform } from '../../redux/HOC/connectPlatform'
import { connectNavigation } from "../../redux/HOC/connectNavigation"
import { screens } from '../../constants/navigation'


const Header = ({navigate, isWeb, isIOS }) =>
    <TouchableOpacity
        onPress={() => navigate(screens.MAIN)}>
        <Image
            style={styles(isWeb, isIOS).image}
            source={require('../../../assets/images/citrika_white.png')} />
    </TouchableOpacity>


const styles = (isWeb, isIOS) => StyleSheet.create({
        image: {
            alignSelf: 'center',
            width: sizeNormalize(200),
            height: sizeNormalize(90),
            resizeMode: 'contain',
            marginLeft: isIOS? '10%' : '-5%',
        }
    })

    export default connectPlatform(connectNavigation(Header))