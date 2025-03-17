import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import categoryReducer from './slices/categorySlice';
import filterReducer from "./slices/filterSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        category: categoryReducer,
        filter: filterReducer,
        products: productReducer
    }
})



export default store;