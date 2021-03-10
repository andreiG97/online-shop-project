const initialState = {
    products: []
}


export function favouriteReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_FAV':
            // return   {...state, 
            //           products: [...state.products, action.payload] 
            //         } 
            let productInFavourites = false;
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    productInFavourites = true;
                    return {
                        ...product
                    }
                } else {
                    return product;
                }
            })

            if (!productInFavourites) {
                    return Object.assign({}, state, {
                        products: [
                            ...state.products,
                            {  
                                ...action.payload.product,
                            }
                        ]
                    })
                } else {
                    return Object.assign({}, state, {
                        products: updatedProducts,
                    });
                }
          
        case 'REMOVE_FAV':
         //   console.log(state.products);
        
            return{
                ...state,
                products: state.products.filter(product =>
                    { console.log(product);
                       // let newProduct = JSON.parse(product);
                        return product.id !== action.payload.id
                    })
            }

       
          
        default:
            return state;
    }
}