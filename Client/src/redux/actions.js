import { ADD_FAV, REMOVE_FAV } from "./actionType";

export const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje,
    }
}

export const removeFav = (id) => ({
        type: REMOVE_FAV,
        payload: id,    
})