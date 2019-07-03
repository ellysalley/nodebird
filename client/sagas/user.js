import { all, call, fork, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL } from '../reducers/user';

function loginAPI() {

} 

function* login() {
  try {
    yield call(loginAPI);
    yield put({
       type: LOG_IN_SUCCESS,
    })
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAIL,
    })
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, function*() {
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  });
}

function* watchSignUp() {

}

export default function* userSaga() {
  yield all([
    watchLogin(),
    watchSignUp(),
  ]);
}