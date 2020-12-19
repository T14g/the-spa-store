import React from 'react';
import { connect } from'react-redux';

import { ProductsListing, ProductItem, AddToCartBtn} from './product-list.styles';

const ProductList = ({ productList, categoryID}) => {
    
    const filteredProducts = productList.filter(product => product.category_id === parseInt(categoryID));
    
    const renderHelper = products => {

        if(products.length > 0) {
            return(
                <ProductsListing>
                    {products.map(product => (
                        <ProductItem key={product.id}>
                            {product.name}
                             - {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            <AddToCartBtn>Adicionar ao Carrinho</AddToCartBtn>
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

export default connect(mapStateToProps)(ProductList);