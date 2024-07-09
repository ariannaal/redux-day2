export const SET_JOBS = 'SET_JOBS';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';

export const setJobsAction = (jobs) => {
    return {
        type: SET_JOBS,
        payload: jobs,
    }
}

// export const setJobs = (jobs) => ({
//     type: 'SET_JOBS',
//     payload: jobs,
// });

export const addToFavouritesAction = (job) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: job,
    }
};

export const removeFromFavouritesAction = (job) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: job,
    }
};

// AZIONE ASINCRONA
// non ritorna un'azione ma una funzione che può essere asincrona, tipo la fetch
export const fetchJobs = (query) => {
    return async (dispatch) => {
        // fetch
        const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search=';
        try {
            const response = await fetch(baseEndpoint + query + '&limit=20')
            if (response.ok) {
                const { data } = await response.json();
                dispatch(setJobsAction(data))
            } else {
                alert("Error fething data");
            }
        } catch (error) {
            console.log(error)
        }

    }

}
