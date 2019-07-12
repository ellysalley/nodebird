import { all, call, fork, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { 
  LOG_IN_REQUEST, 
  LOG_IN_SUCCESS, 
  LOG_IN_FAILURE, 
  SIGN_UP_REQUEST, 
  SIGN_UP_SUCCESS, 
  SIGN_UP_FAILURE,
  LOG_OUT_REQUEST, 
  LOG_OUT_SUCCESS, 
  LOG_OUT_FAILURE, 
} from '../reducers/user';
import axios from "axios";

axios.defaults.baseURL ='http://localhost:8080/api';

function logInAPI(loginData) {
 return axios.post('user/login', loginData, {
   withCredentials: true,
 });
} 

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
       type: LOG_IN_SUCCESS,
       data: result.data,
    });
  } catch (e) {
    console.error(e); 
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn)
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

function logOutAPI() {
  return axios.post('/user/logout', {}, {
    withCredentials: true,
  });
};

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e
    })
  }
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function loadUserAPI(userId) {
  return axios.get(userId ? `/user/${userId}` : '/user/', {
    withCredentials: true,
  });
};

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
      me: !action.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}
function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser)
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchSignUp),
  ]);
}