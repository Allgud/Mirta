import { all, call, delay, fork, put } from 'redux-saga/effects'
import axios from 'axios'
import { setPosts, setPostsError, setUsers, setUsersError } from '../../actions/actionCreator'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
 
function* getAllPosts() {
  yield delay(500)

  try {
    const response = yield call(axios, `${BASE_URL}/posts`)
    yield put(setPosts(response.data))
  }
  catch (e) {
    yield put(setPostsError(e.message))
  }
}

function* getUsers() {
  try {
    const response = yield call(axios, `${BASE_URL}/users`)
    yield put(setUsers(response.data))
  }
  catch (e) {
    yield put(setUsersError(e.message))
  }

}

export default function* initialSaga() {
  yield all([
    fork(getAllPosts),
    fork(getUsers)
  ])
}