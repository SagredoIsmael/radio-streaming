import { connect } from 'react-redux'
import { compose } from 'redux'
import Login from '../../screens/Login'
import { connectNavigation } from "../../redux/HOC/connectNavigation"


const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {

}

export default compose(
  connectNavigation,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Login)