import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';

const sol = handleActions(
  {
    [changeSol]: (state, action) => ({ ...state, current: action.payload })
  },
  { current: 1, min: 1, max: 100 }
);
const photos = handleActions(
  {
    [fetchPhotosRequest]: (state, { payload: { name, sol } }) => ({
      ...state,
      [name]: {
        ...state[name],
        [sol]: { isLoading: true, photos: [], isLoaded: false }
      }
    }),
    [fetchPhotosSuccess]: (state, { payload: { name, sol, photos } }) => ({
      ...state,
      [name]: {
        ...state[name],
        [sol]: {
          isLoading: false,
          photos: photos.map(photo => ({
            id: photo.id,
            img_src: photo.img_src
          })),
          isLoaded: true
        }
      }
    }),
    [fetchPhotosFailure]: (state, { payload: { name, sol } }) => ({
      ...state,
      [name]: {
        ...state[name],
        [sol]: { isLoading: false, photos: [], isLoaded: false } }
    })
  },
  {}
);
export default combineReducers({
  sol,
  photos
});
