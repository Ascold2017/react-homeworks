import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import {
  searchRequest,
  setSearchQuery,
} from '../actions';

const searchQuery = handleAction(
  {
    [setSearchQuery]: (_state, action) => action.payload,
    [searchRequest]: () => ''
  },
  ''
);

export default combineReducers({
  searchQuery
});
