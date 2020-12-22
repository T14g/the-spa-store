import React from 'react';
import { connect } from 'react-redux';

import SVG from '../svg/svg.component';

import { HideModal, HideCart } from '../../redux/shop/shop.actions';

import { ModalBackground, ModalContainer, ModalTitle, Button } from './modal.styles';

const Modal = ({title, show , hideModal, hideCart, modalType}) => {

    //Altera o state para esconder a modal e volta para o início
    const hideHelper = () =>{
        hideModal();
        hideCart();
    }

    //Decide qual o conteúdo da modal usando o modalType
    const contentHelper = () =>{
        switch(modalType) {
            case 'finishModal':
                return <>
                    <SVG name="checked"/>
                    <ModalTitle>Pedido realizado com sucesso!</ModalTitle>
                    <Button className="margin-0" onClick={ () => hideHelper() }>Fechar</Button>
                </>
            
            case 'emptyModal':
                return <>
                    <ModalTitle>
                        Carrinho vazio!
                        <br/>
                        Deseja voltar para o início?
                    </ModalTitle>
                    <Button onClick={ () => hideHelper() }>Ir para o Início</Button>
                    <Button onClick={ () => hideModal() }>Fechar Modal</Button>
                </>

            default:
                break;
        }
    }
    
    return(
        <ModalBackground show={show}>
            <ModalContainer>
                {contentHelper()}
            </ModalContainer>
        </ModalBackground>
    );
}

const mapStateToProps = state => ({
    modalType : state.shop.modalType
})

const mapDispatchToProps = dispatch => ({
    hideModal : () => dispatch(HideModal()),
    hideCart : () => dispatch(HideCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);