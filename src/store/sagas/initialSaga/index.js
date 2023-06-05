import { call, delay, put } from 'redux-saga/effects'
import axios from 'axios'
import { setPosts, setPostsError, loadPosts} from '../../actions/actionCreator'
 
export default function* getAllPosts() {
  yield delay(500)

  try {
    const response = yield call(axios, 'https://jsonplaceholder.typicode.com/posts')
    yield put(setPosts(response.data))
  }
  catch (e) {
    yield put(setPostsError(e.message))
  }
}