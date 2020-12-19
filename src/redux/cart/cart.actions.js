import CartActionTypes from './cart.types';

export const AddCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
})

export const UpdateCart = cartItems => ({
    type: CartActionTypes.UPDATE_CART,
    payload: cartItems
})

export const IncrementItem = () => ({
    type: CartActionTypes.INCREMENT_ITEM
})

export const DecrementItem = () => ({
    type: CartActionTypes.DECREMENT_ITEM
})