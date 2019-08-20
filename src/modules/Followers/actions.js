import { createAction } from 'redux-actions';

export const fetchRequest = createAction('followers/FETCH_REQUEST')
export const fetchSuccess = createAction('followers/FETCH_SUCCESS')
export const fetchFailure = createAction('followers/FETCH_FAILURE')
