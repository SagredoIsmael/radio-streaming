import assign from 'lodash/assign'
import isEmpty from 'lodash/isEmpty'
import { REQUEST_START, REQUEST_END } from './types'
import { getUserToken } from './../selectors/user'
import { firestore } from '../../../App'

export const setRequestStart = requestType => ({
  type: REQUEST_START,
  requestType
})

export const setRequestEnd = requestType => ({
  type: REQUEST_END,
  requestType
})

export const setRequestFail = requestType => ({
  type: REQUEST_END,
  requestType
})

export const fetchRequestWrapper = ({
  requestType,
  route,
  urlParams = {},
  fetchOptions = {},
  onSuccess,
  onError = error => console.log(error),
  customRoute
}) => (dispatch, getState) => {
  dispatch(setRequestStart(requestType))

  const requestOptions = assign({ api_key: getUserToken(getState()) }, urlParams)

  const finalRoute = customRoute ? customRoute : (route, requestOptions)

  return new Promise((resolve, reject) => {
    fetch(finalRoute, isEmpty(fetchOptions) ? undefined : fetchOptions)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        const errorMessage = `Network Error error: ${response.code}`

        dispatch(setRequestFail(requestType))

        onError(errorMessage)
        reject(errorMessage)
      })
      .then(json => {
        dispatch(onSuccess(json))
        dispatch(setRequestEnd(requestType))

        resolve(json)
      })
      .catch(error => {
        dispatch(setRequestFail(requestType))

        reject(error.message)
        onError(error.message)
      })
  })
}


export const fetchSetFirestore = (collection, doc, body) => {
  firestore.collection(collection).doc(doc).set(body)
}

export const fetchGetDocFirestore = (collection, doc, succesFunction, errorFunction) => dispatch =>
  firestore.collection(collection).doc(doc).get()
    .then(function (data) {
      if (data.exists)
        dispatch(succesFunction(data.data()))
      else
        dispatch(succesFunction(null))
    }).catch(function (error) {
      dispatch(errorFunction(error))
    })


export const fetchGetCollectionFirestore = (collection, succesFunction, errorFunction) => dispatch =>
  firestore.collection(collection).get()
    .then(function (querySnapshot) {
      querySnapshot.docs.map(function (doc) {
        dispatch(succesFunction(doc.data()))
      })
    })
    .catch(function (error) {
      dispatch(errorFunction(error))
    })
