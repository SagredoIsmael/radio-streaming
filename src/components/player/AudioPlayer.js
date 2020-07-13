import React, { useEffect, useState } from "react"
import {
    StyleSheet,
    TouchableOpacity,
} from "react-native"
import { Audio } from "expo-av"
import { MaterialIcons } from "@expo/vector-icons"
import { sizeNormalize } from "../../constants/layout"
import colors from "../../constants/colors"

const ICON_PLAY_BUTTON = 'play-circle-outline'
const ICON_PAUSE_BUTTON = 'pause-circle-outline'

const Settings = () => {
    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false,
      })
}

const soundObject = new Audio.Sound()

//const URL_STREAMING = 'https://liveradio.com.es:8000/stream'
const URL_STREAMING = 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3'

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
                await soundObject.stopAsync()
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
                size={isWeb ? sizeNormalize(80) : sizeNormalize(50)}
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