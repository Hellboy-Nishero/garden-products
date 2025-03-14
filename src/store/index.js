import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import categoryReducer from './slices/categorySlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        category: categoryReducer
    }
})



export default store;