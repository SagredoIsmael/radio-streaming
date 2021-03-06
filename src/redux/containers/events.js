import { connect } from 'react-redux'
import { compose } from 'redux'
import Events from '../../screens/Events'
import { fetchDataBlog } from '../actions/blog'
import { connectNavigation } from "../HOC/connectNavigation"
import { connectPlatform } from '../HOC/connectPlatform'
import { getBlogs, getBlogError } from '../selectors/blog'
const mapStateToProps = state => {
  return {
    blogs: getBlogs(state),
    blogsError: getBlogError(state),
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
)(Events)