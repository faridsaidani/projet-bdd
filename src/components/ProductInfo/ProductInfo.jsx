import {React} from 'react'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import './ProductInfo.css'
import picLink from '../../img/productTestPic.png'
const ProductInfo = () =>{
    var contenu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    var productTitle = "Samsung Galaxy S22 Ultra";
    var productCat = "Smartphone";
    var productPrice = "360 $";
    const ajouterAuPanier = () =>{
        console.log("ajouter au panier");
    }
    return(
        <div>
            <div className='productInfoBody'>    
                <div className="productSection">
                    <div className="productDetails">
                        <div className="heartIcon"><FaHeart /></div>
                        <div className="productImg">
                            <img src={picLink} alt="product" />
                        </div>
                        <h2>{productTitle}</h2>
                        <div className='productBottomPart'>
                            <div className="productCategorie">
                                <p>{productCat}</p>
                            </div>
                            <div className="productPrice"><p>{productPrice}</p></div>
                        </div>
                    </div>
                </div>
                <div className="productSection">
                    <div className="productSection2">
                        <div className="productInfo"><button onClick={ajouterAuPanier}><FaShoppingCart/>Ajouter Au Panier</button></div>
                        <div className="productInfo">
                            <div className='contenu'>
                                <h3>Description</h3>
                                <p>{contenu}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo