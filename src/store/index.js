import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import categoryReducer from './slices/categorySlice';
import filterReducer from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        category: categoryReducer,
        filter: filterReducer,
        category: categoryReducer
    }
})



export default store;