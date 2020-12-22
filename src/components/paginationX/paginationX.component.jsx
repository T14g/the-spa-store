import React from 'react';
import { connect } from 'react-redux';

import { LoadPage } from '../../redux/shop/shop.actions'

import { Button } from './paginationX.styles';

const PaginationX = ({perPage, productList, categoryID, loadPage, currentPage}) => {

    let filteredProducts = productList.filter(product => product.category_id === parseInt(categoryID));
    const totalPages = Math.ceil(filteredProducts.length/perPage);

    //Retorna os botões das páginas
    const numbersGenerator = () => {
        let pages = [];
        
        for(let i = 1 ; i <= totalPages; i++){
            let page = <Button className={currentPage === i ? 'active' : '' } onClick={ () => loadPage(i) }>{i}</Button>;
            pages.push(page);
        }

        return pages.map(page => page);
    }

    return(
        <div>
            {numbersGenerator()}
        </div>
    );
}

const mapStateToProps = state => ({
    currentPage          : state.shop.page,
    perPage       : state.shop.perPage,
    productList   : state.shop.products,
    categoryID    : state.shop.selectedCategory,
})

const mapDispatchToProps = dispatch => ({
    loadPage : (page) => dispatch(LoadPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationX);