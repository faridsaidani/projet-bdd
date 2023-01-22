import React from 'react';
import './style.css'
//import SearchBar from './SearchBar/SearchBar'
import NavBar from './NavBar/NavBar'
import SubNavBar from './SubNavBar/SubNavBar'
import ProductInfo from './ProductInfo/ProductInfo';
import CartPage from './CartPage/CartPage'
import Sliderr from './Sliderr/Sliderr'

const App = () =>{

  return (
    <div>
      <NavBar />
      <SubNavBar/>
      {/* <ProductInfo /> */}
      {/* <CartPage /> */}
      <Sliderr />
    </div>
  )
}

export default App