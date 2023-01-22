import React from 'react';
import './style.css'
//import SearchBar from './SearchBar/SearchBar'
import NavBar from './NavBar/NavBar'
import SubNavBar from './SubNavBar/SubNavBar'
import ProductInfo from './ProductInfo/ProductInfo';
import CartPage from './CartPage/CartPage'

const App = () =>{

  return (
    <div>
      <NavBar />
      <SubNavBar/>
      {/* <ProductInfo /> */}
      <CartPage />
    </div>
  )
}

export default App