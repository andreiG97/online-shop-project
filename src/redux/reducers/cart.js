const initialState = {
    products: []
};

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let productInCart = false;
            console.log(state.products)
            const newProducts = state.products.map(product => {
            
                if(product.id === action.payload.product.id){
                    productInCart = true;
                    return{
                        ...product,
                        quantity: product.quantity + 1
                    }
                }else {
                    return product;
                }
            })
            if (!productInCart) {
                
                return Object.assign({}, state, {
                    products: [
                       
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
      
            } else {
                return Object.assign({}, state, {
                    products: newProducts
                });
            }
        
            case 'REMOVE_FROM_CART':
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });

            case 'DECREMENT':
            const decrementCart = state.products.map(product => {
                if (product.id === action.payload.id && product.quantity > 1) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    } 
                } else {
                    return product;
                }
            });
            return Object.assign({}, state, {
                products: decrementCart
            });

            case 'INCREMENT':
                const updatedCart = state.products.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1
                        } 
                    } else {
                        return product;
                    }
                });
                return Object.assign({}, state, {
                    products: updatedCart
                });
            
        default:
            return state;
            
    }
}