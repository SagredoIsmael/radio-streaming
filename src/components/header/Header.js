import * as React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { sizeNormalize } from '../../constants/layout'
import colors from '../../constants/colors'

export default () =>
    <View style={styles().container}>
        <Image
            style={styles().image}
            source={require('../../../assets/images/citrika_black.png')} />
    </View>



const styles = () => StyleSheet.create({
    container:{
        width: sizeNormalize(250),
        height: sizeNormalize(50),
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})