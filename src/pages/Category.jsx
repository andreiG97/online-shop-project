import React, { Component } from 'react';
import Layout from '../components/Layout';
import Products from '../utils/products.json';

export default class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: {}
        };
    }
    componentDidMount() {
        const categoryName = this.props.match.params.categoryName;
        const categoryInfo = Products[categoryName];
        this.setState(
            {
                category: categoryInfo
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
            </div>
         </Layout>
        )
    }
}
