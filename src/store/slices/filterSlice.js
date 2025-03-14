import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        discountActive: false,
        minPrice: 0,
        maxPrice: 99999,
        sorted: ""
    },
    reducers: {
        toggleDiscount: (state) => {
            state.discountActive = !state.discountActive;
        },
        applyFilter: (state, action) => {
            state.minPrice = Number(action.payload.minPrice);
            state.maxPrice = Number(action.payload.maxPrice);
            state.sorted = action.payload.sorted;
        },
    }
})

export const { toggleDiscount, applyFilter } = filterSlice.actions;

export default filterSlice.reducer;