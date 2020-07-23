import React, { Component } from 'react'
import { View, Linking, Image, TouchableOpacity } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel'
import styles from './SliderEntry.style'

export default class SliderEntry extends Component {

    get image () {
        const { data: { photo }, parallax, parallaxProps, even } = this.props

        return parallax ? (
            <ParallaxImage
              source={{ uri: photo }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: photo }}
              style={styles.image}
            />
        )
    }

    render () {
        const { data: { web }, isMobile} = this.props

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => web? isMobile? Linking.openURL(web) : window.open(web) : console.log('This publi hasnt web') }>
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, {}]}>
                    { this.image }
                </View>
                
            </TouchableOpacity>
        );
    }
}
