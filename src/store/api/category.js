import { createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch categories from the server
export const fetchCategories = createAsyncThunk(
    "category/fetchCategories",
    async (_, { rejectWithValue }) => {
        try {
             // Send request to the API
            const response = await fetch("https://exam-server-5c4e.onrender.com/categories/all");
            // Throw an error if response is not successful
            if (!response.ok) {
                throw new Error("Failed to fetch categories");
            }
             // Parse the response data
            const data = await response.json();
            // Log data to the console (for debugging)
            console.log(data);
                  // Return the fetched categories
            return data;
        } catch (error) {
            // Return error to the rejected reducer
            return rejectWithValue(error.message);
        }
    }
);
