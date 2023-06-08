import { takeEvery, call, put, delay } from "redux-saga/effects";
import { BASE_URL, GET_CURRENT_USER_POSTS } from "../../constants";
import axios from "axios";
import { setCurrentUserPosts } from "../../actions/actionCreator";

function* setUsersPosts(args) {
  delay(500)
  const response = yield call(axios, `${BASE_URL}/users/${args.payload}/posts`)

  yield put(setCurrentUserPosts(response.data))
}

function* getUsersPosts() {
  yield takeEvery(GET_CURRENT_USER_POSTS, setUsersPosts)
}

export default function* userPostsSaga() {
  yield call(getUsersPosts)
}