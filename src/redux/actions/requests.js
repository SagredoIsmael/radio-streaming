import assign from 'lodash/assign'
import isEmpty from 'lodash/isEmpty'
import { REQUEST_START, REQUEST_END } from './types'
import { getUserToken } from './../selectors/user'

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