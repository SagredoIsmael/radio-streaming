import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { sizeNormalize, adaptImageWidth, } from '../../constants/layout'
import colors from '../../constants/colors'
import ImageSlider from 'react-native-image-slider'

export default ({ publi }) =>
    <View style={styles.container}>
        <View style={styles.textContent}>
            <Text style={styles.contentText}>Colaboraciones</Text>
        </View>
        <ImageSlider
            autoPlayWithInterval={6000}
            images={publi}
            onPress={({ index }) => console.log('press index:', index)}
            customSlide={({ index, item, style, width }) => (
                <View
                    key={index}
                    style={[
                        style,
                        styles.customSlide,
                    ]}
                >
                    <Image source={{ uri: item }} style={styles.customImage} />
                </View>
            )}
            customButtons={(position, move) => (
                <View style={styles.buttons}>
                    {publi.map((image, index) => {
                        return (
                            <TouchableHighlight
                                key={index}
                                underlayColor="#ccc"
                                onPress={() => move(index)}
                                style={styles.button}
                            >
                                <Text style={position === index && styles.buttonSelected}>
                                    {index + 1}
                                </Text>
                            </TouchableHighlight>
                        );
                    })}
                </View>
            )}
        />
        <View style={styles.textContent}>
            <Text style={styles.contentText}>Contenido adicional</Text>
        </View>
    </View>


const styles = StyleSheet.create({
    container: {
        height: sizeNormalize(500),
        width: '70%',
        alignSelf: 'center',
    },
    textContent: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        color: colors.primary,
        fontSize: sizeNormalize(28),
        margin: '3%',
        fontWeight: "bold",
    },
    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        margin: 3,
        width: 15,
        height: 15,
        opacity: 0.9,
        color: colors.primary,
        fontWeight: "bold",
        fontSize: sizeNormalize(26),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSelected: {
        opacity: 1,
        color: 'red',
    },
    customSlide: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    customImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
})


const styles1 = StyleSheet.create({
    carouselWrapper: {
        height: sizeNormalize(500),
        width: '60%',
        alignSelf: 'center',
        margin: '3%',
    },
    customImage: {
        height: sizeNormalize(500),
        width: '60%',
    }
})
