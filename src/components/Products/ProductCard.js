import { Products } from './Product'; 
import contents from './ProductContent';
import './Products.css';
import { IoIosArrowForward } from 'react-icons/io';

function ProductCard() {
    return(
        <div>
            <div className="side-by-side">
                <h2 className='ProductSection'>Grab the best deal on <span style={{color: '#008ECC'}}>Smartphones</span></h2>
                <h2 className='ViewAll'>View All<IoIosArrowForward className='arrowViewAll'/></h2>
            </div>
            <div className='App'>
               {contents.map(contents => (
                   <Products 
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       price={contents.price}
                       totalSales={contents.totalSales}
                       //oldprice={contents.timeLeft}
                   />
               ))}
            </div>
        </div>
    )
}

export default ProductCard;