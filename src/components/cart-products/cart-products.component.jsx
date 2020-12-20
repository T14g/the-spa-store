import React from 'react';
import { connect } from 'react-redux';

import { List, Item } from './cart-products.styles';

const CartProducts = ({cartItems}) => {

    const renderHelper = () => {
        if(cartItems.length === 0 ){

            return(
                <h2>Nenhum produto no carrinho</h2>
            )
        }else{

            return (
                <List>
                    {
                        cartItems.map(item=>(
                            <Item>{item.name}({item.total})</Item>
                        ))
                    }
                </List>   
            )
        }
    }

    return(
        renderHelper()
    );
}

const mapStateToProps = state => ({
    cartItems : state.cart.cartItems,
    totalItems : state.cart.totalItems
})

export default connect(mapStateToProps)(CartProducts);