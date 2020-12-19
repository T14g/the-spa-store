import ShopActionTypes from './shop.types.js';

const INITIAL_STATE = {
    categories : [],
    products : []
}

const ShopReducer = ( state = INITIAL_STATE , action ) => {
    switch(action.type) {
        case ShopActionTypes.LOAD_CATEGORIES:
            return {
                ...state,
                categories : action.payload
            }

        case ShopActionTypes.LOAD_PRODUCTS:
            return {
                ...state,
                products : action.payload
            }
        
        default:
            return state;
    }
}

export default ShopReducer;