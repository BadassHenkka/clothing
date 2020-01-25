// This is our base reducer object that represents
// all of the state of our application.
// It combines all of the code of our states together.

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// combineReducers from redux combines all our reducers into one object
// which is then used in store.js
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});