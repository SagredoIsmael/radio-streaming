import { GET_DATA_PUBLI, SET_DATA_PUBLI, ERROR_DATA_PUBLI } from './types'
import { fetchGetCollectionFirestore } from './requests'

const getDataPubli = () => ({
  type: GET_DATA_PUBLI
})

const setDataPubli = item => ({
  type: SET_DATA_PUBLI,
  item
})

const errorDataPubli = error => ({
  type: ERROR_DATA_PUBLI,
  error
})


export const fetchDataPubli = () => dispacth => {
  dispacth(getDataPubli())
  dispacth(fetchGetCollectionFirestore('publi', setDataPubli))
}