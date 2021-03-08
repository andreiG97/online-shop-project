const initialState = {
    products: []
}

export function favouriteReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_FAV':
            return   {...state, products: [...state.products, action.payload] } 
          
        case 'REMOVE_FAV':
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id)
            }
        default:
            return state;
    }
}