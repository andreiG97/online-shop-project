const initialState = {
    products: []
};

export function cartReducer(action, state = initialState) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = action.payload; 
            state.products.push(product);
            return state; 
        
        case 'REMOVE_FROM_CART':
            return state;
            
        default:
            return state;
            
    }
}