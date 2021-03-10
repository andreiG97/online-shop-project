import React, { Component } from 'react';
import Products from '../../utils/products.json';
export default class Product extends Component {
    componentDidMount(){
        const { match } = this.props;
        const productId = match.params.productId
        console.log(match);

       const categoryArray = Object.values(Products);
       let currentProduct;

       categoryArray.forEach((category) => {
            const products = category.items;
          const selectedProduct = products.find((product) => product.id === productId)

          if(selectedProduct){
              currentProduct = selectedProduct;
          }
          
       });
    }

    render() {
        return (
            <div>
                Product
            </div>
        )
    }
}
