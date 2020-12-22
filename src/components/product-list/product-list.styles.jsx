import styled from 'styled-components';

export const ProductsListing = styled.ul`
    max-width: 500px;
    margin: 0 auto 20px;
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

    @media(max-width: 550px){
        padding: 15px 10px;
    }

    &::after{
        display: table;
        content: "";
        clear: both;
    }
`

export const ProductImage = styled.img`
    width: 50px;
    height: 50px;
    float: left;

    @media(max-width: 550px) {
        width: 40px;
        height: 40px;
    }
`

export const ProductDescription = styled.p`
    margin:0;
    float: left;
    margin-top: 16px;
    font-weight: 700;
    margin-left: 15px;

    @media(max-width: 550px){
        font-size: 12px;
        max-width: 95px;
        margin-top: 0;
    }
`

export const AddToCartBtn = styled.button`
    padding: 10px 10px;
    position: absolute;
    top: 27px;
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

    @media(max-width: 550px){
        font-size: 12px;
        max-width: 95px;
        top: 10px;
    }
`