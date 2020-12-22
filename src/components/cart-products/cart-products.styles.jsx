import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;

    &::after{
        display: table;
        content: "";
        clear: both;
    }
` 

export const H2custom = styled.h2`
    font-size: 40px;

    @media(max-width: 767px) {
        font-size: 25px;
    }
` 

export const List = styled.ul`
    max-width: 500px;
    margin: 10px auto 0;
    border: 2px #000 solid;
    list-style: none;
    padding-left: 0;
`

export const Item = styled.li`
    text-align: left;
    padding: 20px 10px;
    position: relative;

    &:not(:last-child){
        border-bottom: 2px #000 solid;
    }

    &::after{
        display: table;
        content: "";
        clear: both;
    }
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    float: left;
`

export const Info = styled.div`
    margin:0;
    float: left;
    margin-top: 16px;
    font-weight: 700;
    margin-left: 15px;
    text-align: left;

    @media(max-width : 767px) {
        max-width: 100px;
        margin-top: 7px;
        margin-left: 7px;
        font-size: 12px;

    }
`

export const Price = styled.div`
    float: right;
    font-weight: 600;
    margin-top: 16px;

    @media(max-width : 767px) {
        margin-top: 4px;
    }
`

export const Quantity = styled.div`
    float: left;
    position: relative;
    top: 10px;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    width: 50px;

    @media(max-width: 767px) {
        top: 5px;
        font-size: 14px;
        width: 35px;
    }
`

export const TotalValue = styled.span`
    &::after{
        display: table;
        content: "";
        clear: both;
    }
    
    .label, .price{
        font-size: 18px;
        font-weight: 800;
        margin: 0;
    }
` 

export const FinishBtn = styled.button`
    background: #4B8B3B;
    color: #fff;
    font-size: 25px;
    border: #000;
    padding: 10px 25px;
    cursor: pointer;
    float: right;
    margin-top: 10px;
    margin-bottom: 50px;

    @media(max-width : 767px) {
        font-size: 18px;
    }

    &:hover{
        opacity: 0.8;
    }

    &:focus{
        outline: none;
    }
`

export const StoreInfo = styled.div`
    max-with: 500px;
    margin: 0 auto;

    &::after{
        display: table;
        clear: both;
        content: "";
    }
`

export const StoreInfoInner = styled.div`
    float: left;
    margin-left: 10px;
`

export const StoreName = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    text-align: left;

    @media(max-width: 767px) {
        font-size: 16px;
    }
`

export const TextBlock = styled.p`
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 5px;

    @media(max-width: 767px) {
        font-size: 14px;
    }
`
