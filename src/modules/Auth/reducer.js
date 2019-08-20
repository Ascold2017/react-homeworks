import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

export const getIsAuthorized = state => state.auth.isAuthorized
export const getApiKey = state => state.auth.apiKey

const isAuthorized = handleActions({
    [addApiKey]: (_state, action) => !!action.payload
}, false)

const apiKey = handleActions({
    [addApiKey]: (_state, action) => action.payload
}, null)

export default combineReducers({
    isAuthorized,
    apiKey
})