import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import Categories from './components/categories/categories.component';
import ProductList from './components/product-list/product-list.component';
import CartProducts from './components/cart-products/cart-products.component';

import { LoadCategories, LoadProducts} from './redux/shop/shop.actions';

import shopData from './app-data.json';

const  App = ({loadCategories, loadProducts, showingCart}) => {

  //Load data from json into Redux store
  loadCategories(shopData.categories);
  loadProducts(shopData.products);

  const renderHelper = () =>{

    if(showingCart) {
      return (
        <>
          <h2>Finalizar pedido</h2>
          <p>Confira se seus pedidos estão corretos</p>
          <CartProducts />
        </>
      )
    }else{
      return <><Categories/><ProductList/></>
    }

  }
  
  return (
    <div className="App">

      <Header/>
      {renderHelper()}

    </div>
  );
}

const mapStateToProps = state => ({
  showingCart : state.shop.showingCart  
})

const mapDispatchToProps = dispatch => ({
  loadCategories : (categories) => dispatch(LoadCategories(categories)),
  loadProducts : (products) => dispatch(LoadProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
