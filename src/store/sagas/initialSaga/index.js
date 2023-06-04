import { call } from 'redux-saga/effects'
import axios from 'axios'

export default function* loadPosts() {
  const response = yield call(axios, 'https://jsonplaceholder.typicode.com/posts')
  console.log(response);
}