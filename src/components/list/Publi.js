import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { sizeNormalize, adaptImageWidth } from '../../constants/layout'
import FadingSlides from 'react-native-fading-slides'
import colors from '../../constants/colors'

export default ({ publi }) =>
    <View style={styles.carouselWrapper}>
        <FadingSlides
            slides={publi}
            fadeDuration={1200}
            stillDuration={2000}
            height={500}
            startAnimation={true}
        />
    </View>



const styles = StyleSheet.create({
    carouselWrapper: {
        height: sizeNormalize(500),
        width: '60%',
        alignSelf: 'center',
        margin: '3%'
    }
})
