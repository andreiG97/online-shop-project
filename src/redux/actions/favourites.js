export function addToFav(payload){
    return {
        type: 'ADD_TO_FAV',
        payload
    }
}

export function removeFav(payload){
    return {
        type: 'REMOVE_FAV',
        payload
    }
}