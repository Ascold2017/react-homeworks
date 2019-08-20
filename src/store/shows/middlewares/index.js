import { applyMiddleware, compose } from 'redux';
import { search, show } from '../../../api';
import {
  searchRequest,
  searchRequestSuccess,
  searchRequestFailure,
  fetchShowRequest,
  fetchShowRequestSuccess,
  fetchShowRequestFailure
} from '../actions';

export const searchRequestMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    const query = '';

    search(query)
      .then(data => store.dispatch(searchRequestSuccess(data)))
      .catch(error => store.dispatch(searchRequestFailure(error)));
  }
  return next(action);
};

export const showRequestMiddleware = store => next => action => {
if (action.type === fetchShowRequest.toString()) {
  const id = 190;

  show(id)
    .then(data => store.dispatch(fetchShowRequestSuccess(data)))
    .catch(error => store.dispatch(fetchShowRequestFailure(error)));
}
return next(action);
};

export default compose(
  applyMiddleware(searchRequestMiddleware),
  applyMiddleware(showRequestMiddleware)
);
