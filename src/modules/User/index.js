import { createActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getUserInfo } from './api';
import { getApiKey } from '../Auth'
// SELECTORS
export const isLoadingUserInfo = state => state.user.isLoading;
export const userInfoData = createSelector(
  state => state.user.data,
  data => ({ image: data && data.avatar_url })
);

// ACTION CREATORS
export const { fetchRequest, fetchRequestSuccess, fetchRequestFailure } = createActions(
  {
    FETCH_REQUEST: n => n,
    FETCH_REQUEST_SUCCESS: n => n,
    FETCH_REQUEST_FAILURE: n => n
  },
  { prefix: 'user' }
);

// REDUCERS
const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchRequestSuccess]: () => false,
    [fetchRequestFailure]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchRequestSuccess]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isLoading,
  data
});

// SIDE_EFFECTS
export const fetchUserInfo = userName => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    const apiKey = getApiKey(getState())
    dispatch(fetchRequest())
    getUserInfo(apiKey, userName)
      .then(data => {
        dispatch(fetchRequestSuccess(data));
        resolve(data);
      })
      .catch(error => {
        dispatch(fetchRequestFailure(error));
        reject(error);
      });
  });
