import React, { useEffect, useState } from "react"
import {
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native"
import { Audio } from "expo-av"
import { MaterialIcons } from "@expo/vector-icons"
import { sizeNormalize } from "../../constants/layout"
import colors from "../../constants/colors"

const ICON_PLAY_BUTTON = 'play-circle-outline'
const ICON_PAUSE_BUTTON = 'pause-circle-outline'
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
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    })
}

const soundObject = new Audio.Sound()

const URL_STREAMING = 'https://liveradio.com.es:8000/stream'


export default ({ navigate, isWeb }) => {
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
        <TouchableOpacity
        underlayColor={colors.black}
        style={styles.iconTouchable}
        onPress={() => playAudio()}>
        <MaterialIcons
            name={playing
                ? ICON_PAUSE_BUTTON
                : ICON_PLAY_BUTTON
            }
            size={isWeb? sizeNormalize(80):  sizeNormalize(50)}
            color={colors.primary}
        />
    </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black
    },
    iconTouchable: {
        backgroundColor: colors.black
    }
})