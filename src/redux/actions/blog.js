import { GET_DATA_BLOG, SET_DATA_BLOG, ERROR_DATA_BLOG } from './types'
import { fetchGetCollectionFirestore } from './requests'

const getDataBlog = () => ({
  type: GET_DATA_BLOG
})

const setDataBlog = item => ({
  type: SET_DATA_BLOG,
  item
})

const errorDataBlog = error => ({
  type: ERROR_DATA_BLOG,
  error
})


export const fetchDataBlog = () => dispacth => {
  dispacth(getDataBlog())
  dispacth(fetchGetCollectionFirestore('blog', setDataBlog))
  
}