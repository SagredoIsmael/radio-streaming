
import { SUCCESS_LOGIN, SET_DATA_USER, ERROR_LOGIN, LOG_OUT } from '../actions/types'

const initialState = {
  token: null,
  username: null,
  password: null,
  error: null,
}

export default (state = initialState, action) => {

  switch (action.type) {

    case SUCCESS_LOGIN:
      return {
        ...state,
        token: action.token
      }

    case SET_DATA_USER:
      return {
        ...state,
        [action.data.type]: action.data.value
      }


    case ERROR_LOGIN:
      return {
        ...state,
        error: action.error
      }

    case LOG_OUT:
      return {
        ...state,
        token: null
      }

    default:
      return state
  }
}