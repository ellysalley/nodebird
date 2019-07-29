import { all, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_POSTS_REQUEST, ADD_POSTS_SUCCESS, ADD_POSTS_FAILURE } from '../reducers/post';

function addPostAPI() {
  return axios.post('/post', postData, {
    withCredentials: true,
  });
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data)
    yield put({
      type: ADD_POSTS_SUCCESS,
      data: result.data,
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

function loadMainPostsAPI() {
  return axios.get('/post');
}

function* loadMainPosts(action) {
  try {
    const result = yield call(loadMainPostsAPI, action.data)
    yield put({
      type: LOAD_MAIN_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_MAIN_POSTS_FAILURE,
      error: e, 
    });
  }
}

function* watchLoadMainPosts() {
  yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadMainPosts),
    fork(watchAddPost),
    fork(watchAddComment),
  ]);
}