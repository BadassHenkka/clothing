import { createStore, applyMiddleware } from 'redux';
// logger is handy for debugging redux code
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Here we're putting the logger function inside middlewares array
// if more middlewares are needed, simply put them inside this array.
const middlewares = [logger];

// Creating our store: createStore allways gets the rootReducer and return
// from applyMiddleware which gets the spread values from middlewares
// as individual arguments.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;