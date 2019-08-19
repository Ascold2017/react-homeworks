import {
  fetchShowRequest,
  fetchShowRequestSuccess,
  fetchShowRequestFailure
} from '../actions';
import { show } from '../../../api';

export const searchMiddleware = store => next => action => {
  if (action.type === fetchShowRequest.toString()) {
    const id = 190;

    show(id)
      .then(data => store.dispatch(fetchShowRequestSuccess(data)))
      .catch(error => store.dispatch(fetchShowRequestFailure(error)));
  }
  return next(action);
};
