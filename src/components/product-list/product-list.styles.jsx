import styled from 'styled-components';

export const ProductsListing = styled.ul`
    max-width: 500px;
    margin: 0 auto;
    border: 2px #000 solid;
    list-style: none;
    padding-left: 0;
`

export const ProductItem = styled.li`
    text-align: left;
    padding: 20px 10px;
    position: relative;

    &:not(:last-child){
        border-bottom: 2px #000 solid;
    }
`

export const AddToCartBtn = styled.button`
    padding: 10px 10px;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    border: 2px #000 solid;
    font-weight: 600;
    background: #fff;
    color: #000;

    &:hover{
        background: #000;
        color: #fff;
    }
`