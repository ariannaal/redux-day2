export const SET_JOBS = 'SET_JOBS';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const IS_LOADING = 'IS_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS'
export const FETCH_JOBS_FAILED = 'FETCH_JOBS_FAILED'

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

export const setLoading = (isLoading) => ({
    type: IS_LOADING,
    payload: isLoading,
});


//per gestire gli errori
export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});



export const fetchJobsSuccess = (jobs) => ({
    type: FETCH_JOBS_SUCCESS,
    payload: jobs,
});

export const fetchJobsFailure = (error) => ({
    type: FETCH_JOBS_FAILED,
    payload: error,
});

// AZIONE ASINCRONA
// non ritorna un'azione ma una funzione che può essere asincrona, tipo la fetch
export const fetchJobs = (query) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

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
            dispatch(fetchJobsFailure(error.message));
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }

    }

}
