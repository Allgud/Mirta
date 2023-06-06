import { GET_COMMENTS } from '../../constants'
import { call, takeEvery, put, delay } from 'redux-saga/effects'
import { setComments } from '../../actions/actionCreator'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export function* setCommentsSaga(args) {
  yield delay(500)
  const response = yield call(axios, `${BASE_URL}/posts/${args.payload}/comments`)

  yield put(setComments(response.data))
}

function* getCommentsSaga() {
  yield takeEvery(GET_COMMENTS, setCommentsSaga)
}

export default function* commentsSaga() {
  yield call(getCommentsSaga)
}