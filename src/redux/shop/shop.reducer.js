import ShopActionTypes from './shop.types.js';

const INITIAL_STATE = {
    categories : [],
    products : [],
    selectedCategory: 'all',
    showingCart : false,
    showModal : false,
    modalType : null,
    page : 1,
    perPage : 3
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
                showModal : true,
                modalType: action.payload
            }

        case ShopActionTypes.HIDE_MODAL:
            return {
                ...state,
                showModal : false
            }

        case ShopActionTypes.LOAD_PAGE:
            return {
                ...state,
                page : action.payload
            }


        default:
            return state;
    }
}

export default ShopReducer;