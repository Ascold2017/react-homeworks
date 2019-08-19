import { createStore, compose, combineReducers } from 'redux';
import showsMiddlewares from './shows/middlewares';
import showsReducer from './shows/reducers';

const createAppStore = () => {
  const store = createStore(
    combineReducers({
      showsReducer
    }),
    compose(
      showsMiddlewares,
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

  return store;
};

export default createAppStore;
