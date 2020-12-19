import CartActionTypes from './cart.types';

export const AddCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
})