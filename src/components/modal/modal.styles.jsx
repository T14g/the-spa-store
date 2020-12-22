import styled from 'styled-components';

export const ModalBackground = styled.div`
    background: rgba(0, 0, 0, 0.8);
    width:100%;
    height:100vh;
    background: rgba(0,0,0,0.8);
    position: absolute;
    top: 0;
    left:0;
    display: ${props => props.show ? 'block' : 'none'};
`

export const ModalContainer = styled.div`
    background: #fff;
    height: auto;
    width:500px;
    margin: 0 auto;
    position:relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 50px 25px;

    @media(max-width: 767px) {
        width: 200px;
        padding: 25px 25px;
    }
` 
export const ModalTitle = styled.h2`
    font-size:25px;
    margin-top:0;
    color: #000;

    @media(max-width: 767px) {
        font-size: 18px;
    }

`

export const Button = styled.button`
    background: #000;
    color: #fff;
    font-size: 25px;
    border: #000;
    padding: 10px 25px;
    cursor: pointer;

    &:first-of-type{
        margin-right: 20px;
    }

    &.margin-0{
        margin: 0;
    }

    @media(max-width : 767px) {
        font-size: 18px;
        margin:0 0 10px;
        display: block;
        width: 100%;
    }
`