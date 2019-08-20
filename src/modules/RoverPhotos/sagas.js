import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure } from './actions'
import { getApiKey } from '../Auth/selectors'
import { getSolNum } from '../RoverPhotos/selectors'
import { getPhotos } from './api'
function* fetchRoverPhotosWatcher () {
    yield takeLatest(fetchPhotosRequest.toString(), fetchRoverPhotosFlow)
}

function* fetchRoverPhotosFlow (action) {
    const { name } = action.payload;
    const apiKey = yield select(getApiKey)
    const solNum = yield select(getSolNum)
    try {
        const response = yield call(getPhotos, apiKey, name, solNum)
        yield put(fetchPhotosSuccess({ name, sol: solNum, photos: response.photos }))
    } catch(err) {
        yield put(fetchPhotosFailure({ name, sol: solNum }))
    }
}

export default function* () {
    yield fork(fetchRoverPhotosWatcher)
}