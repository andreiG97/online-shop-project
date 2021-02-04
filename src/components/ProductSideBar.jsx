import React, { Component } from 'react'

export default class ProductSideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            filters: [
                {
                    name: 'Low-price',
                    checked: false
                },
                {
                    name: 'Reasonable-price',
                    checked: false
                },
                {
                    name: 'High-price',
                    checked: false
                }
            ]
        }
    }

    checkBoxValue(name) {
        const Filter =  this.state.filters.find(filter => filter.name === name);
        return Filter.checked;
    }

    handleCheckboxChange(name) {
        const filters = this.state.filters;

        const updatedF = filters.map((filter) => {
            if(filter.name === name) {
                if(filter.checked){
                     return{ 
                         ...filter,
                         checked: false
                     }
                   }else {
                         return {
                             ...filter,
                           checked:true
                        }
                }
            } else if(filter.name !== name && filter.checked) {
                return{
                    ...filter,
                    checked:false
                }
            }else {
                return filter;
            }
        });
        this.setState({filters:updatedF});
    }



    displayProducts(event, downL, upL){
        if(event.target.checked){
            this.props.filterProductList(downL, upL);
        }else {
            this.props.filterProductList(0, Infinity);
        }
        this.handleCheckboxChange(event.target.name);
    }



    render() {
        return (
            <div className="col-3">
                <h6>Filter products</h6>
                <div>
                    <input
                         type="checkbox"
                         id="Low-price"
                         className="mx-2"
                         name="Low-price"
                         checked={this.checkBoxValue('Low-price')}
                         onChange={(e) => this.displayProducts(e, 0, 10)}
                    />
                    <label htmlFor="Low-price">&lt; 10 LEI</label>
                </div>

                <div>
                    <input 
                        type="checkbox" 
                        id="Reasonable-price"
                        className="mx-2"
                        name="Reasonable-price" 
                        checked={this.checkBoxValue('Reasonable-price')}
                        onChange={(e) => this.displayProducts(e, 10, 50)}
                    />
                    <label htmlFor="Reasonable-price"> 10-50 LEI</label>
                </div>

                <div>
                    <input 
                        type="checkbox"
                        id="High-price" 
                        className="mx-2"
                        name="High-price" 
                        checked={this.checkBoxValue('High-price')} 
                        onChange={(e) => this.displayProducts(e, 50, Infinity)}

                    />
                    <label htmlFor="High-price">&gt; 50 LEI</label>
                </div>
                
            </div>
        )
    }
}
