// setCurrentUser has to have the same type as our user.reducer function

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});