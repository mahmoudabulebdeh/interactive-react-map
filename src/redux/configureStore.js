import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Taxies } from './reducers/taxies';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      taxies: Taxies,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
