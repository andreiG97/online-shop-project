import React from 'react'
import './ProductList.css';
function ProductList(props) {
    const { products } = props;
    
    return (
        <div className="container">
           <div className="row">
                { 
                    products.map((product, index) => {
                        return(
                            <div className="col-4 mb-4">
                                <img src={product.image} alt="Missing item" className="  w-100 h-50"/>
                                <p>{product.name}</p>
                                <p>{product.price + product.currency}</p>
                                <button className="btn-outline-dark">Add to cart</button>
                                </div>
                            );
                        })
                    }   
           </div>
        </div>
    )
}

export default ProductList
