import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import categoryReducer from './slices/categorySlice';
import filterReducer from "./slices/filterSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";
import windowReducer from "./slices/modalSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        category: categoryReducer,
        filter: filterReducer,
        products: productReducer,
        cart: cartReducer,
        favorite: favoriteReducer,
        window: windowReducer
    }
})



export default store;