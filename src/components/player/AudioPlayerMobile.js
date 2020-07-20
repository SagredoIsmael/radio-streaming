import React from "react"
import {
    StyleSheet,
    TouchableOpacity
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { sizeNormalize } from "../../constants/layout"
import colors from "../../constants/colors"
import TrackPlayer from "react-native-track-player"

const ICON_PLAY_BUTTON = 'play-circle-outline'
const ICON_PAUSE_BUTTON = 'pause-circle-outline'

const URL_STREAMING = 'https://liveradio.com.es:8000/stream'
//const URL_STREAMING = 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3'


export default class Validator extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isPlaying: false }
    }

    componentDidMount() {
        this.start()
    }

    start = async () => {

        await TrackPlayer.setupPlayer()
        await TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
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
            artist: 'CitrikaFM',
            artwork: require('../../../assets/images/icon_small.png'),
        })
    }

    playAudio = async () => {
        let state = await TrackPlayer.getState()

        if (state == TrackPlayer.STATE_PLAYING) {
            await TrackPlayer.stop()
            this.setState(() => ({ isPlaying: false }))
        } else {
            await TrackPlayer.play()
            this.setState(() => ({ isPlaying: true }))
        }
    }

    checkAudio = async () => {
        let state = await TrackPlayer.getState()

        if (state == TrackPlayer.STATE_PLAYING) {
            this.setState(() => ({ isPlaying: false }))
        } else {
            this.setState(() => ({ isPlaying: true }))
        }
    }

    render() {
        return (
            <TouchableOpacity
                underlayColor={colors.black}
                style={styles.iconTouchable}
                onPress={() => this.playAudio()}>
                <MaterialIcons
                    name={this.state.isPlaying
                        ? ICON_PAUSE_BUTTON
                        : ICON_PLAY_BUTTON
                    }
                    size={sizeNormalize(50)}
                    color={colors.primary}
                />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black
    },
    iconTouchable: {
        backgroundColor: colors.black
    }
})