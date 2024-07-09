import { SET_JOBS } from "../actions";

const initialState = {
    jobs: [],
    // favourites: [],
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS:
            return {
                ...state,
                jobs: action.payload,
            };
        default:
            return state;
    }
};


export default mainReducer;

// Action creators
// export const setJobs = (jobs) => ({
//     type: 'SET_JOBS',
//     payload: jobs,
// });

// export const addToFavourites = (job) => ({
//     type: 'ADD_TO_FAVOURITE',
//     payload: job,
// });

// export const removeFromFavourites = (job) => ({
//     type: 'REMOVE_FROM_FAVOURITE',
//     payload: job,
// });


