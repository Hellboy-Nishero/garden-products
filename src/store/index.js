import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from "./features/categoriesSlice"

const store = configureStore({
    reducer: {
        category: categoryReducer, 
    }
})

export default store;