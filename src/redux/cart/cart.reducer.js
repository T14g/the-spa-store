import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    cartItems : []
}

const CartReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems : [...state.cartItems, action.payload]
            }

        default:
            return state
    }
}

export default CartReducer;