import React from "react"
import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { sizeNormalize } from "../../constants/layout"
import colors from "../../constants/colors"
import TrackPlayer, { usePlaybackState  } from "react-native-track-player"

const ICON_PLAY_BUTTON = 'play-circle-outline'
const ICON_PAUSE_BUTTON = 'pause-circle-outline'

//const URL_STREAMING = 'https://liveradio.com.es:8000/stream'
const URL_STREAMING = 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3'


const start = async () => {
    
    await TrackPlayer.setupPlayer()
    await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_STOP
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE
        ]
      })

    await TrackPlayer.add({
        id: 'CitrikaFM',
        url: URL_STREAMING,
        title: 'CitrikaFM',
        artwork: require('../../../assets/images/icon.png')
    })

}

const playAudio = async () => {
    try {
        if (playing) {
            await TrackPlayer.stop()
            setPlaying(false)
        } else {
            await TrackPlayer.play()
            setPlaying(true)
        }
    } catch (error) {
        console.log("Error when playMusic", error)
    }
}

export default ({ navigate, isWeb }) => {
    const playbackState = usePlaybackState()

    useEffect(() => {
        start()
    }, [])
    
    const [playing, setPlaying] = useState(false)

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