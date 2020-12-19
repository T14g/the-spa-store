import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import Categories from './components/categories/categories.component';
import ProductList from './components/product-list/product-list.component';

import { LoadCategories, LoadProducts} from './redux/shop/shop.actions';

import shopData from './app-data.json';

const  App = ({loadCategories, loadProducts}) => {

  loadCategories(shopData.categories);
  loadProducts(shopData.products);

  return (
    <div className="App">
      <Header />
      <Categories />
      <ProductList />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  loadCategories : (categories) => dispatch(LoadCategories(categories)),
  loadProducts : (products) => dispatch(LoadProducts(products)),
});

export default connect(null, mapDispatchToProps)(App);
