import React from 'react';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import BackIcon from '../back-icon/back-icon.component';

import {HeaderContainer, LogoContainer } from './header.styles';


const Header = ({showingCart}) => (
    <HeaderContainer>
        
        <BackIcon show={showingCart}/>

        <LogoContainer>Logo</LogoContainer>
        
        <CartIcon/>
    </HeaderContainer>
);

const mapStateToProps = state => ({
    showingCart : state.shop.showingCart  
})

export default connect(mapStateToProps)(Header);

