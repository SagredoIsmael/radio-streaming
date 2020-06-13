import { connect } from 'react-redux'
import { compose } from 'redux'
import Main from '../../screens/Main'
import { connectNavigation } from "../HOC/connectNavigation"
import { connectPlatform } from '../HOC/connectPlatform'
import { fetchDataBlog } from '../actions/blog'
import { getData, getError, isLoading } from '../selectors/blog'

const mapStateToProps = state => {
  return {
    data: getData(state),
    error: getError(state),
    isLoading: isLoading(state)
  }
}

const mapDispatchToProps = {
  fetchDataBlog
}

export default compose(
  connectNavigation,
  connectPlatform,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Main)