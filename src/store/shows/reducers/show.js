import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import {
  fetchShowRequest,
  fetchShowRequestSuccess,
  fetchShowRequestFailure
} from '../actions';

const isLoadingShow = handleAction(
  {
    [fetchShowRequest]: () => true,
    [fetchShowRequestSuccess]: () => false,
    [fetchShowRequestFailure]: () => false
  },
  false
);

const showError = handleAction(
  {
    [fetchShowRequest]: () => null,
    [fetchShowRequestFailure]: (_state, action) => action.payload
  },
  null
);

const show = handleAction(
  {
    [fetchShowRequest]: () => [],
    [fetchShowRequestSuccess]: (_state, action) => action.payload
  },
  null
);


export default combineReducers({
  isLoadingShow,
  showError,
  show
})