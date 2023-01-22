import {React, useState} from 'react'
import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri'
import {BsTrash} from 'react-icons/bs'
import cartItem1 from '../../img/CartItem1.png'
import './Productitem.css'

const ProductItem = (props) =>{
    const [itemCount, setItemCount] = useState(1);
    const itemTitle = "Perfume ‘la vie est belle’";
    const itemCategory = "Cosmetics";
    const itemPrice = '230'
    return(
        <div>
            <div className="cartItem">
                <div className="itemImage"><img src={props.details.photos[0]} alt="item1" /></div>
                <h4>{props.details.nom}<span style={{"font-size" : "0.6rem"}}><br/>{props.details.categorie}</span></h4>
                <h5></h5>
                <h4>{itemCount}</h4>
                <div className='itemArrows'> <RiArrowUpSFill className='itemArrow' onClick={() => {  setItemCount(itemCount + 1)} }/> <RiArrowDownSFill className='itemArrow' onClick={() => { if (itemCount>0) setItemCount(itemCount - 1)}}/></div>
                <h5>{props.details.prix}$</h5>
                <h5><BsTrash className='trashButton' onClick={props.deleteItem}/></h5>
            </div>
        </div>
    )
}
export default ProductItem;