import { legacy_createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'

const store = legacy_createStore(rootReducer)

export default store