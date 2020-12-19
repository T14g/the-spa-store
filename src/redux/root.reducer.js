import { combineReducers } from 'redux';

import ShopReducer from './shop/shop.reducer';
import CartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
    shop:  ShopReducer,
    cart:  CartReducer
})

export default rootReducer;