import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFav} from '../redux/actions/favourites';
import { ReactComponent as Close} from '../assets/icons/close.svg';
import { addToCart } from '../redux/actions/cart';
import './Favourite.css'


function Favourite(props) {
    const { favourites, removeProduct } = props;
    

   // const { name, price, currency, image, id } = props
    //console.log(props.favourites[0].product.id)
   
    return (
        <Layout>
            <div className="fav-page container-fluid container-min-max-width">
                {
                    favourites.length ?
                        <div className="row">
                            {
                                favourites.map( product => {
                                   
                                    return <div className="col d-flex flex-column align-items-center text-center my-5" key={product.id}>
                                           <div>
                                                <img className="w-75" src={product.image} alt="Product"/>
                                                <p>{ product.name }</p>
                                           </div>
                                            <p className="w-25">{ product.price } { product.currency }</p>
                                            <button
                                                className="btn btn-primary mb-4 font-weight-bold"
                                            
                                                onClick={() => {
                                                    props.addToCart({
                                                        product: {
                                                            id: product.id,
                                                            name: product.name,
                                                            price: product.price,
                                                            currency: product.currency,
                                                            image: product.image
                                                        }
                                                    })
                                                }}
                                            >
                                                Add to cart
                                            </button>
                                            <div onClick={() => removeProduct({id: product.id})}>
                                                <Close/>
                                            </div>
                                    </div>
                                })
                            }
                        </div>
                        :
                        <div className="d-flex flex-column align-items-center">
                             <p className="h3">No favourite products</p>
                        <Link to="/"><button className="btn btn-outline-dark">Home</button></Link>
                        </div>
                }
            </div>
        </Layout>
    )
}

function mapStateToProps(state){
    return{
        favourites: state.favourites.products
    }
}

function mapDispatchToProps(dispatch){
    return{
        removeProduct: (product) => dispatch(removeFav(product)),
        addToCart: (payload) =>  dispatch(addToCart(payload))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)
