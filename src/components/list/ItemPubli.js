// import React from 'react'
// import { StyleSheet, View, Image, TouchableOpacity, Linking } from 'react-native'
// import { sizeNormalize, width, height } from '../../constants/layout'
// import colors from '../../constants/colors'
// import Carousel from 'react-native-banner-carousel'

// const renderPage = (item, index, isWeb, isMobile) =>
//     <TouchableOpacity
//         key={index}
//         onPress={() => item.web? isMobile? Linking.openURL(item.web) : window.open(item.web) : console.log('This publi hasnt web') }>
//         <Image style={styles(isWeb).customImage} source={{ uri: item.photo }} />
//     </TouchableOpacity >


// export default ({ item, isWeb, isMobile }) =>
//     <View style={styles(isWeb).container}>
//         <Carousel
//             autoplay
//             autoplayTimeout={7000}
//             loop
//             index={0}
//             pageSize={width / 1.1}
//         >
//             {item.map((image, index) => renderPage(image, index, isWeb, isMobile))}
//         </Carousel>
//     </View>


// const styles = (isWeb) => StyleSheet.create({
//     container: {
//         flex: 1,
//         alignSelf: 'center',
//         alignContent: 'center',
//         justifyContent: 'center', 
//         marginTop: isWeb ? 0 : -height / 20
//     },
//     customImage: {
//         width: width / 1.1,
//         height: isWeb ? height / 1.3 : height / 2,
//         borderRadius: 10,
//         resizeMode: 'contain',
//     },
// })


import React, { Component } from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { sliderWidth, itemWidth } from '../UI/SliderEntry.style'
import SliderEntry from '../UI/SliderEntry'
import styles from '../UI/index.style'
import colors from '../../constants/colors'

export default class itemPubli extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slider1ActiveSlide: 0
        }
    }

    _renderItem = ({ item, index }) =>
        <SliderEntry
            data={item}
            isMobile={this.props.isMobile}
        />

    renderCarousel(item) {
        const { slider1ActiveSlide } = this.state

        return (
            <View style={styles.exampleContainer}>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={item}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    firstItem={0}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    layout={'stack'}

                    autoplay={true}

                    autoplayInterval={7000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
                <Pagination
                    dotsLength={item.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={colors.white}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.secondary}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this._slider1Ref}
                    tappableDots={!!this._slider1Ref}
                />
            </View>
        )
    }


    render() {
        const { item, index, isWeb, isMobile } = this.props

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                        translucent={true}
                        backgroundColor={'rgba(0, 0, 0, 0.3)'}
                        barStyle={'light-content'}
                    />

                    {this.renderCarousel(item)}
                </View>
            </SafeAreaView>
        )
    }
}