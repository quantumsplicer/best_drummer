import { combineReducers } from 'redux'
import drummerReducer from './drummerReducers'

const rootReducers = combineReducers({
  drummer: drummerReducer
})

export default rootReducers
