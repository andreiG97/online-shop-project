import React from 'react'
import './ProductItem.css'
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart'

function ProductItem(props) {
    const { name, price, currency, image, id } = props


    return (
        
            <div className=" product-item col-4 d-flex flex-column align-items-center justify-content-center">
                <img src={image} alt="Missing item" className="mb-3 w-100 h-50 my-3"/>
                <p className="text-center">{name}</p>
                <p className="text-center">{price + currency}</p>
                <button onClick={() => props.addToCart(
                    {
                        product: {
                            
                                id,
                                name,
                                price,
                                currency,
                                 image
                            
                        }
                    }
                )} 
                
                className="btn btn-outline-dark">Add to cart
                </button>
            </div>
                     
    )
}
function mapDispatchToProps(dispatch){
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    };
}

export default connect(null, mapDispatchToProps)(ProductItem);
