import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../api/category";

// Helper to get categories from localStorage
const getStoredCategories = () => {
    const storedCategories = localStorage.getItem("categories");
    return storedCategories ? JSON.parse(storedCategories) : [];
};

// Initial state with localStorage fallback
const initialState = {
    categories: getStoredCategories(),
    status: "idle",
    error: null
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        // Load categories from localStorage manually
        initCategoriesFromLocalStorage: (state) => {
            state.categories = getStoredCategories();

        }
    },
    extraReducers: (builder) => {
        builder
            // When fetch starts
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            // When fetch succeeds
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload;

                // Cache categories in localStorage
                localStorage.setItem("categories", JSON.stringify(action.payload));
            })
            // When fetch fails
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    }
});

export const { initCategoriesFromLocalStorage } = categorySlice.actions;

export default categorySlice.reducer;

