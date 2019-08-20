import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth from './Auth';
import followers, { sagas as followersSagas } from './Followers';
import user, { sagas as userSagas } from './User';

export function* rootSaga() {
  yield fork(followersSagas);
  yield fork(userSagas);
}

export default combineReducers({ auth, user, followers });