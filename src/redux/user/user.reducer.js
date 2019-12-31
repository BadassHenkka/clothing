const INITIAL_STATE = {
    currentUser: null
};

// Actions go through every reducer so remember to return default currentState
// in case there's no match for the action.type in any reducer.
const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...currentState,
                currentUser: action.payload
            }
        default:
            return currentState;
    }
};

export default userReducer;