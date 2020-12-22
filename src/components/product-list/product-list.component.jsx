import React from 'react';
import { connect } from'react-redux';

import PaginationX from '../paginationX/paginationX.component';

import { 
    ProductsListing, 
    ProductItem, 
    AddToCartBtn, 
    ProductImage, 
    ProductDescription } 
    from './product-list.styles';

import { AddCartItem, UpdateCart , IncrementItem} from '../../redux/cart/cart.actions';

const ProductList = ({ 
    productList, 
    categoryID, 
    addCartItem, 
    cartItems, 
    updateCart,
    incrementCart,
    perPage,
    page
}) => {

    let offset = (page - 1) * perPage;

    let filteredProducts = productList.filter(product => product.category_id === parseInt(categoryID));

    let pagedProducs = filteredProducts.slice(offset).slice(0, perPage);

    const handleAddToCart = (product) => {

        let productInCart = false;
        
        if(cartItems.length === 0) {
            product.total = 1;
            addCartItem(product);
            incrementCart();
        }else{

            //Verify if you already bought this
            cartItems.forEach(item => {
                if(product.name === item.name){
                    item.total +=1;
                    productInCart = true;
                }
            });

            if(productInCart) {
                updateCart(cartItems);
                incrementCart();
            }else{
                product.total = 1;
                addCartItem(product);
                incrementCart();
            }

        }  
    }

    const renderHelper = products => {

        if(products.length > 0) {
            return(
                <>
                <ProductsListing>
                    {products.map(product => (
                        <ProductItem key={product.id}>
                            <ProductImage src={process.env.PUBLIC_URL + product.image} />

                            <ProductDescription>
                                {product.name} -
                                {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </ProductDescription>
                           
                            <AddToCartBtn onClick={() => handleAddToCart(product) }>Adicionar ao Carrinho</AddToCartBtn>
                        </ProductItem>
                    ))}
                </ProductsListing>
                <PaginationX />
                </>
            )
        }else{
            return (
                <p>Selecione uma categoria e em seguida adicione os produtos ao carrinho</p>
            )
        }
        
    }

    return(
        renderHelper(pagedProducs)
    );
}

const mapStateToProps = state => ({
    productList   : state.shop.products,
    categoryID    : state.shop.selectedCategory,
    perPage       : state.shop.perPage,
    page          : state.shop.page,
    cartItems     : state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
    addCartItem : item => dispatch(AddCartItem(item)),
    updateCart  : items => dispatch(UpdateCart(items)),
    incrementCart   : () => dispatch(IncrementItem())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);