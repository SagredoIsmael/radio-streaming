import { connect } from 'react-redux'
import { compose } from 'redux'
import Profile from '../../screens/Profile'
import { fetchLogin } from '../actions/user'
import { getUserToken } from '../selectors/user'

const mapStateToProps = state => {
  return {
    token : getUserToken(state)
  }
}

const mapDispatchToProps = {
  fetchLogin
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
      )
)(Profile)