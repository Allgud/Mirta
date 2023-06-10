import { all, fork } from "redux-saga/effects"
import initialSaga from "./initialSaga"
import commentsSaga from "./commentsSaga"
import userPostsSaga from "./userPostsSaga"
import currentUserSaga from "./currentUserSaga"

export default function* rootSaga() {
  yield all([
    fork(initialSaga),
    fork(commentsSaga),
    fork(userPostsSaga),
    fork(currentUserSaga)
  ])
}