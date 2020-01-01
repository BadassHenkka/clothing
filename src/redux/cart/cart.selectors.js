import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

// because we used createSelector, this is now a memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
            0
        )
);