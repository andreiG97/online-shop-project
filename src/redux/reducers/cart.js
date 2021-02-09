const initialState = {
    products: []
};

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = action.payload; 
            const newState = {
                ...state,
                products: [...state.products,
                            product
                          ]
            }
            return newState; 
        
        case 'REMOVE_FROM_CART':
            return state;
            
        default:
            return state;
            
    }
}