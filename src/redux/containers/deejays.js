import { connect } from 'react-redux'
import { compose } from 'redux'
import Deejays from '../../screens/Deejays'
import { connectNavigation } from "../HOC/connectNavigation"
import { connectPlatform } from '../HOC/connectPlatform'
import { getData, getError } from '../selectors/deejays'
import { fetchDataDjs } from '../actions/deejays'

const mapStateToProps = state => {
  return {
    deejays: getData(state),
    error: getError(state),
  }
}

const mapDispatchToProps = {
  fetchDataDjs
}

export default compose(
  connectNavigation,
  connectPlatform,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Deejays)