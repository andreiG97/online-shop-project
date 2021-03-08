import React from 'react'
import ProductItem from './productItem/ProductItem';
function ProductList(props) {
    const { products } = props;
    
    return (
        <div className="container">
           <div className="row">
                { products
                          ?
                            products.map((product) => {
                                return(
                                        <ProductItem
                                        key={product.id}
                                        {...product}
                                        />
                                    );
                                })
                            : null    
                    }   
           </div>
        </div>
    )
}

export default ProductList
