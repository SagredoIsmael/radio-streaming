import { connect } from 'react-redux'
import { compose } from 'redux'
import Contact from '../../screens/Contact'
import { connectNavigation } from "../HOC/connectNavigation"


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
)(Contact)