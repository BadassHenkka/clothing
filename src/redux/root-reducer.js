// This is our base reducer object that represents
// all of the state of our application.
// It combines all of the code of our states together.

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// local storage from redux persist
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

// no need to persist user because firebase does that for us
const persistConfig = {
  key: 'root',
  storage,
  // inside whitelist we tell redux-persist which reducers
  // we want to persist
  whitelist: ['cart'],
};

// combineReducers from redux combines all our reducers into one object
// which is then used in store.js
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

// persistReducer combines the rootReducer with persistConfig
// so it is a new PERSISTED rootReducer. This needs to be passed
// to index.js
export default persistReducer(persistConfig, rootReducer);
