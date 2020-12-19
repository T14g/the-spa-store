import React from 'react';
import { connect } from'react-redux';

import { ProductsListing, ProductItem, AddToCartBtn} from './product-list.styles';

import { AddCartItem } from '../../redux/cart/cart.actions';

const ProductList = ({ productList, categoryID, addCartItem}) => {
    
    const filteredProducts = productList.filter(product => product.category_id === parseInt(categoryID));
    
    const renderHelper = products => {

        if(products.length > 0) {
            return(
                <ProductsListing>
                    {products.map(product => (
                        <ProductItem key={product.id}>
                            {product.name}
                             - {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            <AddToCartBtn onClick={() => addCartItem(product) }>Adicionar ao Carrinho</AddToCartBtn>
                        </ProductItem>
                    ))}
                </ProductsListing>
            )
        }else{
            return (
                <p>Seleciona uma categoria e em seguida adicione os produtos ao carrinho</p>
            )
        }
        
    }

    return(
        renderHelper(filteredProducts)
    );
}

const mapStateToProps = state => ({
    productList : state.shop.products,
    categoryID    : state.shop.selectedCategory
})

const mapDispatchToProps = dispatch => ({
    addCartItem : item => dispatch(AddCartItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);