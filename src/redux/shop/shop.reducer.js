import ShopActionTypes from './shop.types.js';

const INITIAL_STATE = {
    categories : [],
    products : [],
    selectedCategory: null
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

        case ShopActionTypes.SET_CATEGORY:
            return {
                ...state,
                selectedCategory : action.payload
            }
        
        default:
            return state;
    }
}

export default ShopReducer;