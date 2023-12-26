import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favourites.slice';

export const store = configureStore({
    reducer: {
        favouriteMeals: favouritesReducer
    }
});