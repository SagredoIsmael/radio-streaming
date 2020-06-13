import { connect } from 'react-redux'
import { navigate, goBack, reset, toggleDrawer } from '../actions/navigation'

export const connectNavigation = WrappedComponent => {
    const mapStateToProps = state => ({
        
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