import React, { Component } from 'react';
import Layout from '../components/Layout';
import Products from '../utils/products.json';
import ProductList from '../components/ProductList';
import ProductSidebar from '../components/ProductSideBar';

export default class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: {},
            items: [],
            filteredItems: []
        };
    }

    filterProductList(down, up){
        const filteredItems = this.state.items.filter((product) => {
             return product.price >= down && product.price < up;
        });
        this.setState({filteredItems: filteredItems});
    }

    componentDidMount() {
        const categoryName = this.props.match.params.categoryName;
        const categoryInfo = Products[categoryName];
        this.setState(
            {
                category: categoryInfo,
                items: Products[categoryName].items,
                filteredItems: Products[categoryName].items
            }
        );
    }

    render() {
        return (
           <Layout>

            <div className="container-fluid container-min-man-width">
                <h2>
                    {this.state.category.name}
                </h2>
                <ProductSidebar  filterProductList={(downL, upL) => this.filterProductList(downL, upL)}/>
                <ProductList products={this.state.filteredItems}/>
                                           
                
                
            </div>
         </Layout>
        )
    }
}
