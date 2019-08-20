import { createAction } from 'redux-actions'

export const searchRequest = createAction('SEARCH_REQUEST')
export const searchRequestSuccess = createAction('SEARCH_SUCCESS')
export const searchRequestFailure = createAction('SEARCH_FAILURE')

export const setSearchQuery = createAction('SET_SEARCH_QUERY')

export const fetchShowRequest = createAction('FETCH_SHOW_REQUEST')
export const fetchShowRequestSuccess = createAction('FETCH_SHOW_REQUEST_SUCCESS')
export const fetchShowRequestFailure = createAction('shows/FETCH_SHOW_REQUEST_FAILURE')