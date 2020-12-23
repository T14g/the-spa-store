import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
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
      <div className="app-inner-container">
        {renderHelper()}
      </div>
      <Footer/>
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
