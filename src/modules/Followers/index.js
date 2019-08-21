import { createActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth'

// SELECTORS
export const getIsLoadingFollowers = state => state.followers.isLoading;
export const getFollowersList = createSelector(
  state => state.followers.data,
  followers =>
    followers.map(follower => ({
      image: follower.avatar_url,
      name: follower.login
    }))
);
// ACTION CREATORS
export const { fetchRequest, fetchSuccess, fetchFailure } = createActions({
    FETCH_REQUEST: n => n,
    FETCH_SUCCESS: n => n,
    FETCH_FAILURE: n => n
}, { prefix: 'follower' })

// REDUCERS
const isLoading = handleActions({
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false,
}, false)

const data = handleActions({
    [fetchSuccess]: (_state, action) => action.payload,
}, [])

export default combineReducers({
    isLoading,
    data
})

// SIDE_EFFECTS
export const fetchFollowersInfo = userName => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    const apiKey = getApiKey(getState())
    dispatch(fetchRequest())
    getFollowersInfo(apiKey, userName)
      .then(data => {
        dispatch(fetchSuccess(data));
        resolve(data);
      })
      .catch(error => {
        dispatch(fetchFailure(error));
        reject(error);
      });
  });