import React from 'react';
import { connect } from 'react-redux';

import SVG from '../svg/svg.component';
import Modal from '../modal/modal.component';
import { UpdateCart, IncrementItem, DecrementItem, ClearCart } from '../../redux/cart/cart.actions';
import { ShowModal } from '../../redux/shop/shop.actions';

import { List, Item, Info, FinishBtn, Container } from './cart-products.styles';

const CartProducts = ({
    cartItems, 
    incrementItem, 
    decrementItem, 
    updateCart, 
    showingModal, 
    showModal,
    clearCart,
    totalItems
    }) => {

    //Remove uma unidade e atualiza o carrinho
    const removeOne = (itemName) => {
        let flag = false;

        //Remove uma unidade do item
        cartItems.forEach(item => {
            if(item.name === itemName) {
                item.total -= 1;
                flag = true;
            }
        })

        //Remove produtos com total 0 unidades
        let newArray = cartItems.filter(item => item.total > 0);

        //Valida se houve mudanças
        if(flag) {
            
            //Há apenas 1 e será removido, mostrar modal
            if( totalItems === 1) {
                showModal('emptyModal');
            }

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

        //Valida se houve mudanças
        if(flag) {
            incrementItem();
            updateCart(cartItems);
        }
        
    }
    
    //Retorna o valor total das compras formatado em Reais R$
    const totalValue = () => {
        let total = 0;

        cartItems.forEach(item => {
            let temp = item.total * item.price;
            total += temp;
        })

        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    //Limpa o carrinho ao finalizar a compra
    const finishHelper = () => {
        clearCart();
        showModal('finishModal');
    }

    
    //Renderiza a lista de items no carrinho caso ela exista
    const renderHelper = () => {
        if(cartItems.length === 0 ){
            return(
                <>
                <h2>Nenhum produto no carrinho</h2>
                <Modal show={showingModal} title="Compra realizada com sucesso!"/>
                </>
            )
        }else{

            return (
                <Container>
                <h2>Finalizar pedido</h2>
                <p>Confira se seus pedidos estão corretos</p>
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
                    <Item>Total = {totalValue()}</Item>
                </List>   
                
                <FinishBtn onClick={() => finishHelper()}>Finalizar Compra</FinishBtn>

                </Container>
            )
        }
    }

    return(
        <>  
            {renderHelper()}
        </>
       
    );
}

const mapStateToProps = state => ({
    cartItems : state.cart.cartItems,
    totalItems : state.cart.totalItems,
    showingModal : state.shop.showModal
})

const mapDispatchToProps = dispatch => ({
    incrementItem : () => dispatch(IncrementItem()),
    decrementItem : () => dispatch(DecrementItem()),
    updateCart    : (items) => dispatch(UpdateCart(items)),
    showModal     : (modalType) => dispatch(ShowModal(modalType)),
    clearCart     : () => dispatch(ClearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);