import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mainReducer from '../reducers/index';
import favouritesReducer from '../reducers/favoritesReducer'

const rootReducer = combineReducers({
    main: mainReducer,
    favourites: favouritesReducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
