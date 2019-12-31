import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
};

// Actions go through every reducer so remember to return default currentState
// in case there's no match for the action.type in any reducer.
const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser: action.payload
            }
        default:
            return currentState;
    }
};

export default userReducer;