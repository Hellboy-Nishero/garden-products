import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../api/category"; 

const getStoredCategories = () => {
    const storedCategories = localStorage.getItem("categories");
    return storedCategories ? JSON.parse(storedCategories) : [];
};

const initialState = {
    categories: getStoredCategories(),  
    status: "idle",
    error: null
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
      
        initCategoriesFromLocalStorage: (state) => {
            state.categories = getStoredCategories();
        
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload;

                // ✅ Сохраняем загруженные категории в `localStorage`
                localStorage.setItem("categories", JSON.stringify(action.payload));
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    }
});

export const { initCategoriesFromLocalStorage } = categorySlice.actions;

export default categorySlice.reducer;