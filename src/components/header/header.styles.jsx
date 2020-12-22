import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #000;
    color: #fff;
`;

export const LogoContainer = styled.a`
    width: 70px;
    margin: 0 auto;
    font-weight: 600;
    line-height: 70px;
    text-transform: uppercase;
    font-size: 30px;

    @media(max-width: 550px) {
        font-size: 25px;
    }
`;

