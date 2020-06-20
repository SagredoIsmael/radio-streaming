import { connect } from 'react-redux'
import { compose } from 'redux'
import Main from '../../screens/Main'
import { connectNavigation } from "../HOC/connectNavigation"
import { connectPlatform } from '../HOC/connectPlatform'
import { fetchDataBlog } from '../actions/blog'
import { fetchDataPubli } from '../actions/publi'
import { getBlogs, getBlogError, isBlogLoading } from '../selectors/blog'
import { getPubli, getPubliError, isPubliLoading } from '../selectors/publi'


const mapStateToProps = state => {
  return {
    blogs: getBlogs(state),
    blogError: getBlogError(state),
    isBlogLoading: isBlogLoading(state),
    publi: getPubli(state),
    publiError: getPubliError(state),
    isPubliLoading: isPubliLoading(state)
  }
}

const mapDispatchToProps = {
  fetchDataBlog,
  fetchDataPubli
}

export default compose(
  connectNavigation,
  connectPlatform,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Main)