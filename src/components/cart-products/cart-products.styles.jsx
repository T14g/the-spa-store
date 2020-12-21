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

export const List = styled.ul`
    max-width: 500px;
    margin: 20px auto 0;
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

export const Info = styled.p`
    margin:0;
    float: left;
    margin-top: 16px;
    font-weight: 700;
    margin-left: 15px;
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

    &:hover{
        opacity: 0.8;
    }

    &:focus{
        outline: none;
    }
`