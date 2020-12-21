import React from 'react';
import { connect } from 'react-redux';

import SVG from '../svg/svg.component';

import { UpdateCart, IncrementItem, DecrementItem } from '../../redux/cart/cart.actions';

import { List, Item, Info } from './cart-products.styles';

const CartProducts = ({cartItems, incrementItem, decrementItem, updateCart}) => {


    //Remove uma unidade e atualiza o carrinho
    const removeOne = (itemName) => {
        let flag = false;;

        //Remove uma unidade do item
        cartItems.forEach(item => {
            if(item.name === itemName) {
                item.total -= 1;
                flag = true;
            }
        })

        //Verifica se algum item zerou
        let newArray = cartItems.filter(item => item.total > 0);

        //Valida se houve mudanças
        if(flag) {
            decrementItem();
            updateCart(newArray);
        }

    }

    //Adiciona uma unidade e atualiza o carrinho
    const addOne = (itemName) => {
        let flag = false;

        //Add uma unidade do item
        cartItems.forEach(item => {
            if(item.name === itemName) {
                item.total += 1;
                flag = true;
            }
        })
        console.log("you must add");

        //Valida se houve mudanças
        if(flag) {
            incrementItem();
            updateCart(cartItems);
        }
        
    }

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
                            <Item key={item.name}>
                                <SVG name="plus" onClickHandler={() => addOne(item.name)} />
                                <SVG name="minus" onClickHandler={() => removeOne(item.name)} />
                                <Info>
                                    {item.name} - {item.total} x { item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} =  
                                    {(item.total*item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </Info>
                            </Item>
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

const mapDispatchToProps = dispatch => ({
    incrementItem : () => dispatch(IncrementItem()),
    decrementItem : () => dispatch(DecrementItem()),
    updateCart    : (items) => dispatch(UpdateCart(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);