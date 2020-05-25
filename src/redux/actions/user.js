import { SUCCESS_LOGIN, SET_DATA_USER, ERROR_LOGIN, LOG_OUT} from './types'
import constants from '../../constants/fetch'
import { fetchRequestWrapper } from './requests'

export const fetchLoginSuccess = token => ({
  type: SUCCESS_LOGIN,
  token
})

export const fetchLoginError = error => ({
  type: ERROR_LOGIN,
  error
})

export const setDataUser = data => ({
  type: SET_DATA_USER,
  data
})

export const logOut = () => ({
  type: LOG_OUT
})

export const fetchLogin = body =>
  fetchRequestWrapper({
    requestType: constants.REQUEST_LOGIN,
    customRoute: constants.API_URL + constants.LOGIN_URL,
    onSuccess: (json) => json && fetchLoginSuccess(json.api_key),
    onError: fetchLoginError,
    fetchOptions: {
      method: 'POST',
      headers: constants.DEFAULT_HEADER,
      body: JSON.stringify(body)
    },
  })