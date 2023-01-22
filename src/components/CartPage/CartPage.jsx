import {React, useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import './CartPage.css'
import ProductItem from "./ProductItem"
import ItemContent from './ItemContent'

const CartPage = () =>{
    var data = ItemContent;
    const [itemsCount, setItemsCount] = useState(data.length);
    const deleteItem = (id) =>{
        data = data.filter(function(obj){
            return obj._id!==id;
        });
        console.log(id);
        console.log(data);
        setItemsCount(data.length);
    }

    return(
        <div>
            <div className="container">
                <div className="shoppingCart">
                    <div className="goBack" >
                        <h4 className="continueShopping"><IoIosArrowBack className='arrowBack'/>Continue shopping</h4>
                    </div>
                    <div className="titleHeader">
                        <h3 className="titleCart">Shopping cart</h3>
                        <h2 className="itemCount">You have {itemsCount} items in your cart</h2>
                    </div>
                    <div className="cartItems">
                     {data.map(data => (
                        <ProductItem details = {data} deleteItem = {() => deleteItem(data._id)}/>
                     ))}
                     </div>
                </div>
                <div className="checkOut">
                    <p>test</p>
                </div>
            </div>
        </div>
    )
}

export default CartPage;