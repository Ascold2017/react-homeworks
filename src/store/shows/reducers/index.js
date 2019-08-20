import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  searchRequest,
  setSearchQuery,
  fetchShowRequest,
  fetchShowRequestSuccess,
  fetchShowRequestFailure,
  searchRequestSuccess,
  searchRequestFailure
} from '../actions';

const isLoadingShow = handleActions(
  {
    [fetchShowRequest]: () => true,
    [fetchShowRequestSuccess]: () => false,
    [fetchShowRequestFailure]: () => false
  },
  false
);

const showError = handleActions(
  {
    [fetchShowRequest]: () => null,
    [fetchShowRequestFailure]: (_state, action) => action.payload
  },
  null
);

const show = handleActions(
  {
    [fetchShowRequest]: () => [],
    [fetchShowRequestSuccess]: (_state, action) => action.payload
  },
  null
);

const isLoadingShowsList = handleActions(
  {
    [searchRequest]: () => true,
    [searchRequestSuccess]: () => false,
    [searchRequestFailure]: () => false
  },
  false
);

const showsListError = handleActions(
  {
    [searchRequest]: () => null,
    [searchRequestFailure]: (_state, action) => action.payload
  },
  null
);

const shows = handleActions(
  {
    [searchRequest]: () => [],
    [searchRequestSuccess]: (_state, action) => action.payload
  },
  []
);

const searchQuery = handleActions(
  {
    [setSearchQuery]: (_state, action) => action.payload,
    [searchRequest]: () => ''
  },
  ''
);

export default combineReducers({
  showsList: combineReducers({
    searchQuery,
    isLoadingShowsList,
    showsListError,
    shows
  }),
  show: combineReducers({
    isLoadingShow,
    showError,
    show
  })
})