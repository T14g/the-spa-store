import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component';

import {HeaderContainer, LogoContainer } from './header.styles';


const Header = () => (
    <HeaderContainer>
        <LogoContainer>
            Logo
        </LogoContainer>

        <CartIcon />
    </HeaderContainer>
);

export default Header;

