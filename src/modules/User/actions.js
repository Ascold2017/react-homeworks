import { createAction } from 'redux-actions';

export const fetchRequest = createAction('user/FETCH_REQUEST')
export const fetchSuccess = createAction('user/FETCH_REQUEST_SUCCESS')
export const fetchFailure = createAction('user/FETCH_REQUEST_FAILURE')