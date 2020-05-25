import { connect } from 'react-redux'
import { navigate, goBack, reset, toggleDrawer } from '../actions/navigation'
import { getNavigationCurrentScreen } from '../selectors/navigation.js'

export const connectNavigation = WrappedComponent => {
    const mapStateToProps = state => ({
        currentScreen: getNavigationCurrentScreen(state)
    })

    const mapDispatchToProps = {
        navigate,
        reset,
        goBack,
        toggleDrawer,
    }

    return connect(
        mapStateToProps, 
        mapDispatchToProps
    )(WrappedComponent)
}