import { combineReducers } from 'redux';
import searchReducer from './search'
import showReducer from './show'
import showsListReducer from './showsList'

export default combineReducers({
  search: searchReducer,
  showsList: showsListReducer,
  show: showReducer
});
