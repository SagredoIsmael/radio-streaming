import { GET_DATA_DJS, SET_DATA_DJS, ERROR_DATA_DJS } from './types'
import { fetchGetCollectionFirestore } from './requests'

const getDataDjs = () => ({
  type: GET_DATA_DJS
})

const setDataDjs = item => ({
  type: SET_DATA_DJS,
  item
})

const errorDataDjs = error => ({
  type: ERROR_DATA_DJS,
  error
})


export const fetchDataDjs = () => dispacth => {
  dispacth(getDataDjs())
  dispacth(fetchGetCollectionFirestore('deejays', setDataDjs))
}