import { FaRegHeart } from 'react-icons/fa';
import './Products.css';

export function Products(props) {
    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                <FaRegHeart className={"productCard__cart"} />

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        <div className='productSales'>{props.totalSales} units sold</div>
                    </div>
                    <div className='displayStack__2'>
                        <div className='productSave'>${props.price}</div>
                        <div className='productSave'>{props.totalSales} units sold</div>
                    </div>
                </div>
            </div>
        </div>
    )
}