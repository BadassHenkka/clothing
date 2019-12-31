// This is our base reducer object that represents
// all of the state of our application.
// It combines all of the code of our states together.

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

//combineReducers from redux combines all our reducers into one object
export default combineReducers({
    user: userReducer
});