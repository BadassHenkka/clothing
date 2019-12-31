// setCurrentUser has to have the same type as our user.reducer function
import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});