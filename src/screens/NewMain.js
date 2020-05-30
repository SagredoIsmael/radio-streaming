import React, { useEffect, useState } from "react"
import {
    Dimensions,
    Slider,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native"
import { Audio } from "expo-av"
import { FontAwesome5 } from "@expo/vector-icons"
import { sizeNormalize } from "../constants/layout"
import colors from "../constants/colors"

const ICON_PLAY_BUTTON = 'play'
const ICON_PAUSE_BUTTON = 'pause'
const ICON_STOP_BUTTON = 'stop'
const ICON_FORWARD_BUTTON = 'forward'
const ICON_BACK_BUTTON = 'backward'
const ICON_MUTED_BUTTON = 'volume-mute'
const ICON_UNMUTED_BUTTON = 'volume-up'

const Settings = () => {
    Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    })
}

const soundObject = new Audio.Sound()

const URL_STREAMING = 'http://live.radiovoz.es/mp3/stream_coruna.mp3'


export default ({ navigate }) => {
    useEffect(() => { 
        Settings(),
        initSoundObject()
     }, [])
    const [playing, setPlaying] = useState(false)

    const stateAudio = {
        shouldPlay: false,
        shouldCorrectPitch: true,
        volume: 1.0,
        isMuted: false
    }

    const initSoundObject = () => {
        soundObject.loadAsync(
            { uri: URL_STREAMING },
            stateAudio
            )
    }

    const playAudio = async () => {
        try {
            if (playing) {
                await soundObject.pauseAsync()
                setPlaying(false)
            } else {
                await soundObject.playAsync()
                setPlaying(true)
            }
        } catch (error) {
            console.log("Error when playMusic", error)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                underlayColor={colors.black}
                onPress={() => playAudio()}
            >
                <FontAwesome5
                    name={playing
                        ? ICON_PAUSE_BUTTON
                        : ICON_PLAY_BUTTON
                    }
                    size={sizeNormalize(30)}
                    color={colors.black}
                />
            </TouchableWithoutFeedback>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})