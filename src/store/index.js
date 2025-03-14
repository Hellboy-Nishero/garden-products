import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import categoryReducer from './slices/categorySlice';
import productReducer from './slices/productSlice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        category: categoryReducer,
        products: productReducer
    }
})

export default store;