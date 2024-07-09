import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
    favourites: [],
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
            };
        case REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter((fav) => fav !== action.payload),
            };
        default:
            return state;
    }
}

export default favoritesReducer;