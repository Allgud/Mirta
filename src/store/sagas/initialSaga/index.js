import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { setPosts, setPostsError} from '../../actions/actionCreator'
 
export default function* getAllPosts() {
  try {
    const response = yield call(axios, 'https://jsonplaceholder.typicode.com/posts')
    yield put(setPosts(response.data))
  }
  catch (e) {
    yield put(setPostsError(e.message))
  }
}