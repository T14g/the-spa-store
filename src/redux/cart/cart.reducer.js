import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    cartItems : [],
    totalItems : 0
}

const CartReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems : [...state.cartItems, action.payload]
            }

        case CartActionTypes.UPDATE_CART:
            return {
                ...state,
                cartItems : action.payload
            }

        case CartActionTypes.INCREMENT_ITEM:
            return {
                ...state,
                totalItems : state.totalItems + 1
            }

        case CartActionTypes.DECREMENT_ITEM:
            return {
                ...state,
                totalItems : state.totalItems - 1
            }

        default:
            return state
    }
}

export default CartReducer;