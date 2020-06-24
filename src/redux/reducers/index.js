import { combineReducers } from 'redux'
import user from './user'
import blog from './blog'
import publi from './publi'
import deejays from './deejays'

export const rootReducer = combineReducers({
  user,
  blog,
  publi,
  deejays
})
