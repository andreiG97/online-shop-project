export function addToCart(payload){
    return{
        type: 'ADD_TO_CART',
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: 'REMOVE_FROM_CART',
        payload
    }
}

export function incrementProduct(payload) {
    return {
        type: 'INCREMENT',
        payload
    }
}

export function decrementProduct(payload) {
    return {
        type: 'DECREMENT',
        payload
    }
}