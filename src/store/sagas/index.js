import { all, call, spawn } from "redux-saga/effects"
import initialSaga from "./initialSaga"

export default function* rootSaga() {
  const sagas = [initialSaga]

  const retrySagas = yield sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        }
        catch (e) {
          console.log(e)
        }
      }
    })
  })

  yield all(retrySagas)
}