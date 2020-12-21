import React from 'react';
import { connect } from 'react-redux';

import { HideModal, HideCart } from '../../redux/shop/shop.actions';

import { ModalBackground, ModalContainer, ModalTitle, Button } from './modal.styles';

const Modal = ({title, show , hideModal, hideCart}) => {

    //Altera o state para esconder a modal e volta para o início
    const hideHelper = () =>{
        hideModal();
        hideCart();
    }
    
    return(
        <ModalBackground show={show}>
            <ModalContainer>
                <ModalTitle>{title}</ModalTitle>
                <Button onClick={ () => hideHelper() }>Ir para o Início</Button>
                <Button onClick={ () => hideModal() }>Fechar Modal</Button>
            </ModalContainer>
        </ModalBackground>
    );
}

const mapDispatchToProps = dispatch => ({
    hideModal : () => dispatch(HideModal()),
    hideCart : () => dispatch(HideCart())
})

export default connect(null, mapDispatchToProps)(Modal);