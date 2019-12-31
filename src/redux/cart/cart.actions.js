import CartActionTypes from './cart.types';

// payload is an optional property on action object
// since we don't use payload in the cartReducer -> no need to put it here
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});