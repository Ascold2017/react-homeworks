import { createSelector } from 'reselect';
import _get from 'lodash.get'
export const getSearchQuery = state => state.showsReducer.showsList.searchQuery;
export const getIsLoadingShowsList = state => state.showsReducer.showsList.isLoadingShowsList;
export const getShowsListError = state => state.showsReducer.showsList.showsListError;
export const getShowsList = createSelector(
  state => state.showsReducer.showsList.shows,
  shows =>
    shows.map((show, i) => {
      return {
        id: _get(show, 'id', i),
        image:  _get(show, 'image.medium', ''),
        name: _get(show, 'name', ''),
        summary: _get(show, 'summary', '')
      }
    })
);

export const getIsLoadingShow = state => state.showsReducer.show.isLoadingShow
export const getShowError = state => state.showsReducer.show.showError
export const getShow = createSelector(
  state => state.showsReducer.show.show,
  show => ({
    id: _get(show, 'id', null),
    name: _get(show, 'name', ''),
    image: _get(show, 'image.medium', ''),
    summary: _get(show, 'summary', ''),
    casts: _get(show, '_embedded.cast', []).map((cast, i) => ({
      id: _get(cast, 'person.id', i),
      name: _get(cast, 'person.name', ''),
      image:  _get(cast, 'person.image.medium', '')
    }))
  })
);