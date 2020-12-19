import React from 'react';
import { connect } from 'react-redux';

import { SetCategory } from '../../redux/shop/shop.actions';

const Categories = ({categories, setCategory, categorySelected}) => {
    

    const handleSelect = (e) => {
        setCategory(e.target.value);
    }
    
    return(
        <select onChange={ (event) => handleSelect(event)} value={categorySelected}>
            <option defaultValue>Seleciona uma categoria</option>
            {
                categories.length > 0 ? (
                    categories.map(category => (
                        <option 
                        key={category.id} 
                        value={category.id}>
                        {category.name}
                        </option>
                    ))
                ) : null
            }
        </select>
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