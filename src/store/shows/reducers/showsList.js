import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import {
  searchRequest,
  searchRequestSuccess,
  searchRequestFailure
} from '../actions';

const isLoadingShowsList = handleAction(
  {
    [searchRequest]: () => true,
    [searchRequestSuccess]: () => false,
    [searchRequestFailure]: () => false
  },
  false
);

const showsListError = handleAction(
  {
    [searchRequest]: () => null,
    [searchRequestFailure]: (_state, action) => action.payload
  },
  null
);

const shows = handleAction(
  {
    [searchRequest]: () => [],
    [searchRequestSuccess]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({
  isLoadingShowsList,
  showsListError,
  shows
});
