import React from 'react';

import { FooterContainer, FooterContent, FooterMark } from './footer.styles';

const Footer = () => {

return(
    <FooterContainer>
        <FooterContent>
            &copy;2020 <FooterMark>Tiago Oliveira</FooterMark>
        </FooterContent>
    </FooterContainer>
    );
}

export default Footer;