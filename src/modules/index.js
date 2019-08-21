import { combineReducers } from 'redux';
import auth from './Auth';
import followers from './Followers';
import user from './User';


export default combineReducers({ auth, user, followers });