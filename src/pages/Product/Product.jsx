import React, { Component } from 'react';
import Products from '../../utils/products.json';
import Layout from '../../components/layout/Layout'
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
import { addToFav } from '../../redux/actions/favourites';
import {  ReactComponent as Heart} from '../../assets/icons/heart.svg';
import './Product.css';

class Product extends Component {
    constructor(props){
        super(props);
        this.state ={
            product: {}
        }
    }
    componentDidMount(){
        const { match } = this.props;
        const productId = match.params.productId
        console.log(match);

       const categoryArray = Object.values(Products);
       let currentProduct;

       categoryArray.forEach((category) => {
            const products = category.items;
          const selectedProduct = products.find((product) => product.id === Number(productId))

          if(selectedProduct){
              currentProduct = selectedProduct;
          }
          
       });
       this.setState({product: currentProduct});
    }

    render() {
        const { product } = this.state;
        return (
            <Layout>
            <div className="product-page content-min-height container-fluid container-min-max-width">
             
                <h1 className="my-5 h2">{product.name}</h1>
          
                <div className="product-info d-flex">
                    <div className=" image-wrapper d-flex mr-5 ">
                        <img src={product.image} alt="Product presentation"/>
                    </div>
                    <div className="product-details ml-3">
                        <p className="h3 text-danger">{product.price} {product.currency}</p>
                        <button
                            className="btn btn-primary mb-4 font-weight-bold"
                           
                            onClick={() => {
                                this.props.addToCart({
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
                        <div 
                                    className="mt-1 ml-2 d-flex flex-column"
                                    onClick={() => 
                                        this.props.addToFavourites({
                                            product: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                currency: product.currency,
                                                image: product.image,
                                            }
                                    })}
                                > 
                                    <Heart />
                         </div>      
                         <div>
                        <p><span className="font-weight-bold">Weight: </span>: {product.weight}</p>
                        <p><span className="font-weight-bold">Colour: </span>: {product.colour}</p>
                        <p><span className="font-weight-bold">Contains: </span>: {product.contains}</p>
                        <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                        <p className="font-weight-bold mb-1">Description:</p>
                        <p>{product.description}</p>
                        </div>     
                    </div>
                </div>
            </div>
        </Layout>
    );
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavourites: (payload) => dispatch(addToFav(payload))
    }
}

export default connect(null, mapDispatchToProps)(Product);