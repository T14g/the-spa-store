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

export const ShowCart = () => ({
    type: ShopActionTypes.SHOW_CART
})

export const HideCart = () => ({
    type: ShopActionTypes.HIDE_CART
})

export const ShowModal = modalType => ({
    type: ShopActionTypes.SHOW_MODAL,
    payload: modalType
})

export const HideModal = () => ({
    type: ShopActionTypes.HIDE_MODAL
})