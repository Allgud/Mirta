import { GET_COMMENTS, BASE_URL } from '../../constants'
import { call, takeEvery, put, delay } from 'redux-saga/effects'
import { setComments } from '../../actions/actionCreator'
import axios from 'axios'

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