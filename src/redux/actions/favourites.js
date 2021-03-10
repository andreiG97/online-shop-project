export function addToFav(payload){
    return {
        type: 'ADD_TO_FAV',
        payload
    }
}

export function removeFav(payload){
    console.log(payload);
    return {
        type: 'REMOVE_FAV',
        payload
    }
}