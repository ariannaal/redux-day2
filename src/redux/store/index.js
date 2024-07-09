import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mainReducer from '../reducers/index';
import favouritesReducer from '../reducers/favoritesReducer'
import loadingReducer from '../reducers/loadingReducer';
import errorReducer from '../reducers/errorReducer';

const rootReducer = combineReducers({
    main: mainReducer,
    favourites: favouritesReducer,
    loading: loadingReducer,
    error: errorReducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
