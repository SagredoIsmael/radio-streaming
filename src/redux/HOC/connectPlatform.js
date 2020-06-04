import { connect } from 'react-redux'
import { Platform} from 'react-native'
import { isStraitScreen } from '../../constants/layout'

export const connectPlatform = WrappedComponent => {
    const mapStateToProps = state => ({
        platform: Platform.OS,
        isWeb: Platform.OS == 'web' && !isStraitScreen,
        isMobile: Platform.OS == 'ios' || Platform.OS == 'android',
        isAndroid: Platform.OS == 'android',
        isIOS: Platform.OS == 'ios'
    })



    return connect(
        mapStateToProps, 
        null
    )(WrappedComponent)
}