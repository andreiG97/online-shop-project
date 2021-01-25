import React, { Component } from 'react';
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
            <div>
                <h1>
                    {this.state.category.name}
                </h1>
            </div>
        )
    }
}
