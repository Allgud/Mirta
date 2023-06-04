import { call, spawn } from 'redux-saga/effects'
import axios from 'axios'

function* loadPosts() {
  const response = yield call(axios, 'https://jsonplaceholder.typicode.com/posts')
  console.log(response);
}

export default function* rootSaga() {
  yield spawn(loadPosts)
}