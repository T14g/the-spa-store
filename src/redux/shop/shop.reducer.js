import ShopActionTypes from './shop.types.js';

const INITIAL_STATE = {
    categories : [],
    products : [],
    selectedCategory: null,
    showingCart : false,
    showModal : false
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
        
        case ShopActionTypes.SHOW_CART:
            return {
                ...state,
                showingCart : true
            }

        case ShopActionTypes.HIDE_CART:
            return {
                ...state,
                showingCart : false
            }
        
        case ShopActionTypes.SHOW_MODAL:
            return {
                ...state,
                showModal : true
            }

        case ShopActionTypes.HIDE_MODAL:
            return {
                ...state,
                showModal : false
            }


        default:
            return state;
    }
}

export default ShopReducer;