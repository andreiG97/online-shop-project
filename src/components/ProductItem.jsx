import React from 'react'
import './ProductItem.css'

function ProductItem(props) {
    const { name, price, currency, image } = props

    return (
        
            <div className=" product-item col-4 d-flex flex-column align-items-center justify-content-center">
                <img src={image} alt="Missing item" className="mb-3 w-100 h-50 my-3"/>
                <p className="text-center">{name}</p>
                <p className="text-center">{price + currency}</p>
                <button className="btn-outline-dark">Add to cart</button>
            </div>
                     
    )
}

export default ProductItem
