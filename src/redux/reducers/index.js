import { combineReducers } from 'redux'
import user from './user'
import blog from './blog'

export const rootReducer = combineReducers({
  user,
  blog
})
