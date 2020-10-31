import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// logger is handy for debugging redux code
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Here we're putting the logger function inside middlewares array
// if more middlewares are needed, simply put them inside this array.
const middlewares = [logger];

// Creating our store: createStore allways gets the rootReducer and return
// from applyMiddleware which gets the spread values from middlewares
// as individual arguments.
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// store is used in index.js in the Provider component from react-redux

// Here we create a persisted version of our store
export const persistor = persistStore(store);

export default { store, persistor };
