import { all, fork, takeLatest } from 'redux-saga/effects';
import { ADD_POSTS_REQUEST, ADD_POSTS_SUCCESS, ADD_POSTS_FAILURE } from '../reducers/post';

function* addPost() {
  try {
    yield delay(2000);
    yield put({
      type: ADD_POSTS_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: ADD_POSTS_FAILURE,
      error: e, 
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POSTS_REQUEST, addPost);
}
export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}