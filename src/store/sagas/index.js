import { spawn } from "redux-saga/effects"
import loadPosts from "./initialSaga"

export default function* rootSaga() {
  yield spawn(loadPosts)
}