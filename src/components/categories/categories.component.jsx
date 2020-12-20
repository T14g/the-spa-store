import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem } from './categories.styles';

import { SetCategory } from '../../redux/shop/shop.actions';

const Categories = ({categories, setCategory, categorySelected}) => {
    

    const handleSelect = (e) => {
        setCategory(e.target.value);
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
    setCategory : id => dispatch(SetCategory(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);