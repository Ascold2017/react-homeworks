import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions'
import { getApiKey } from '../Auth/reducer'
import { getFollowersInfo } from './api'

function* fetchFollowersWatcher() {
  console.log(fetchRequest.toString())
  yield takeLatest(fetchRequest.toString(), fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey)
  try {
    const response = yield call(getFollowersInfo, apiKey, action.payload)
    yield put(fetchSuccess(response))
  } catch(error) {
    put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
