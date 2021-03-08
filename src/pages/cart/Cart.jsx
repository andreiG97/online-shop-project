import React from 'react';
import './Cart.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { ReactComponent as Close} from '../../assets/icons/close.svg';
import { removeFromCart } from '../../redux/actions/cart'

function Cart(props) {

    return (
        <Layout>
            <div className="cart container-fluid container-min-max-width d-flex flex-column align-items-center">
                {
                    props.products.length
                    ? <div className="container w-100">
                         <div className="d-flex justify-content-between text-center h5 text-bold">
                            <p className="w-25">Product</p>
                            <p className="w-25">Price</p>
                            <p className="w-25">Quantity</p>
                            <p className="w-25">Total</p>
                        </div>
                        {
                            props.products.map(
                                product => {
                                    return <div className="d-flex justify-content-between align-items-center text-center"
                                         key={product.id}>
                                        <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                            <img src={product.image} alt="Product"/>
                                            <p>{ product.name }</p>
                                        </div>
                                        <p className="w-25">{ product.price } { product.currency }</p>
                                        <p className="w-25">{ product.quantity }</p>
                                        <div className="w-25 d-flex justify-content-center">
                                            <p className="mr-2">{ product.price * product.quantity } { product.currency }</p>
                                            <Close onClick={() => props.removeFromCart({id: product.id})} />
                                        </div>
                                    </div>
                                })       
                        }
                    </div>

                    : <div className="d-flex flex-column align-items-center">
                         <p className="h3">Go back and use that credit card</p>
                        <Link to="/"><button className="btn btn-outline-dark">Home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        products: state.cart.products
    };
}
function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (payload) => dispatch(removeFromCart(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
