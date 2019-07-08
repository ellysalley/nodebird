import { all, call, fork, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { 
  LOG_IN_REQUEST, 
  LOG_IN_SUCCESS, 
  LOG_IN_FAILURE, 
  SIGN_UP_REQUEST, 
  SIGN_UP_SUCCESS, 
  SIGN_UP_FAILURE,
} from '../reducers/user';
import axios from "axios";

axios.defaults.baseURL ='http://localhost:8080/api';

function loginAPI(loginData) {
 return axios.post('user/login', loginData);
} 

function* login(action) {
  try {
    yield call(loginAPI, action.data);
    yield put({
       type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e); 
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login)
}

function signUpAPI(signUpData) {
  return axios.post('/user', signUpData);
};

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
    })
  }
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
  ]);
}