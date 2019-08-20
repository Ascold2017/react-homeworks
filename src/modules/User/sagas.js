import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions'
import { getApiKey } from '../Auth/reducer'
import { getUserInfo } from './api'

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest.toString(), fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey)
  try {
    const response = yield call(getUserInfo, apiKey, action.payload)
    yield put(fetchSuccess(response))
  } catch(error) {
    put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchUserWatcher)
}
