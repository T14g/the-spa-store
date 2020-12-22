import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem } from './categories.styles';

import { SetCategory, LoadPage } from '../../redux/shop/shop.actions';

const Categories = ({categories, setCategory, categorySelected, loadPage}) => {
    

    const handleSelect = (e) => {
        setCategory(e.target.value);
        loadPage(1);
    }
    
    return(
        <List onChange={ (event) => handleSelect(event)} value={categorySelected}>
            <ListItem defaultValue>Seleciona uma categoria</ListItem>
            {
                categories.length > 0 ? (
                    categories.map(category => (
                        <ListItem 
                        key={category.id} 
                        value={category.id}>
                        {category.name}
                        </ListItem>
                    ))
                ) : null
            }
        </List>
    );

}

const mapStateToProps = state => ({
    categories : state.shop.categories,
    categorySelected : state.shop.categorySelected
})

const mapDispatchToProps = dispatch =>({
    setCategory : id => dispatch(SetCategory(id)),
    loadPage    : (page) => dispatch(LoadPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);