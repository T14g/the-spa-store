import styled from 'styled-components';

export const Button = styled.button`
    padding: 10px;
    background: #fff;
    border: 2px #000 solid; 
    color: #000;
    font-weight: 600;
    cursor: pointer;

    &:hover, &.active{
        background: #000;
        color: #fff;
    }


    &:not(:last-child){
        margin-right: 5px;
    }
`