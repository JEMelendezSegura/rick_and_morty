import { ADD_FAV, REMOVE_FAV } from "./actionType";

const initialState = {
    myFavorites:[]
}

function reducer (state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, action.payload]};
        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter(pj => pj.id !== action.payload)};
        default:
            return state;
    }
}


export default reducer;