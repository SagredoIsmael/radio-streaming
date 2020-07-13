import * as React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { sizeNormalize } from '../../constants/layout'
import colors from '../../constants/colors'
import AudioPlayer from './AudioPlayer'

const Player = ({isWeb}) => {
     let AudioPlayerMobile
     if (!isWeb) AudioPlayerMobile = require('./AudioPlayerMobile').default

    return (
        <View style={styles().container}>
            {isWeb ?
                <AudioPlayer />
                :    
                <AudioPlayerMobile />    
        }
            <View style={styles().infoUser}>
                <Text style={styles().textTitle}>
                    EN DIRECTO
            </Text>
                <Text style={styles().textDescription}>
                    CITRIKA FM
            </Text>
            </View>
            <Image
                style={styles().imageSoundGif}
                source={{ uri: 'https://media.giphy.com/media/XMaB779YCmP9m/giphy.gif' }} />
            <Image
                style={styles().image}
                source={require('../../../assets/images/icon_white.png')} />
        </View>
    )
}

const styles = (isWeb) => StyleSheet.create({
    container: {
        flex: 1 / 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
        paddingStart: '2%'
    },
    infoUser: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2%',
    },
    textTitle: {
        color: colors.white,
        fontSize: sizeNormalize(16),
        fontWeight: "bold",
    },
    textDescription: {
        color: colors.primary,
        fontSize: sizeNormalize(16),
    },
    image: {
        width: '20%',
        height: '50%',
        resizeMode: 'contain',
    },
    imageSoundGif: {
        width: '20%',
        height: '100%',
        resizeMode: 'contain',
        marginLeft: '2%'
    }
})

export default Player