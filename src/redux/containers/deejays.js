import { connect } from 'react-redux'
import { compose } from 'redux'
import Deejays from '../../screens/Deejays'
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
)(Deejays)