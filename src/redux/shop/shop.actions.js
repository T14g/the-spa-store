import ShopActionTypes from './shop.types';

export const LoadCategories = categories => ({
    type: ShopActionTypes.LOAD_CATEGORIES,
    payload: categories
})

export const LoadProducts = products => ({
    type: ShopActionTypes.LOAD_PRODUCTS,
    payload: products
})

export const SetCategory = categoryID => ({
    type: ShopActionTypes.SET_CATEGORY,
    payload: categoryID
})