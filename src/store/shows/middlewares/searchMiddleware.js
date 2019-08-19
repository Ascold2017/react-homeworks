import { search } from '../../../api';
import {
  searchRequest,
  searchRequestSuccess,
  searchRequestFailure
} from '../actions';

export const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    const query = '';

    search(query)
      .then(data => store.dispatch(searchRequestSuccess(data)))
      .catch(error => store.dispatch(searchRequestFailure(error)));
  }
  return next(action);
};
