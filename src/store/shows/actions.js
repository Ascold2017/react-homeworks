import { createAction } from 'redux-actions'

export const searchRequest = createAction('shows/SEARCH_REQUEST')
export const searchRequestSuccess = createAction('shows/SEARCH_REQUEST_SUCCESS')
export const searchRequestFailure = createAction('shows/SEARCH_REQUEST_FAILURE')

export const setSearchQuery = createAction('shows/SET_SEARCH_QUERY')

export const fetchShowRequest = createAction('shows/FETCH_SHOW_REQUEST')
export const fetchShowRequestSuccess = createAction('shows/FETCH_SHOW_REQUEST_SUCCESS')
export const fetchShowRequestFailure = createAction('shows/FETCH_SHOW_REQUEST_FAILURE')