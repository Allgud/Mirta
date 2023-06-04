import { legacy_createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store