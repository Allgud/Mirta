import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_CURRENT_USER } from '../../constants'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import { setCurrentUser } from '../../actions/actionCreator'

function* currentUserWorkerSaga(args) {
  const response = yield call(axios, `${BASE_URL}/users/${args.payload}`)

  yield put(setCurrentUser(response.data.id))
}

function* currentUserWatcherSaga() {
  yield takeEvery(GET_CURRENT_USER, currentUserWorkerSaga)
}

export default function* currentUserSaga() {
  yield call(currentUserWatcherSaga)
}