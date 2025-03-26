import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "window",
    initialState: {
        isActive: false
    },
    reducers: {
        toggleWindow: (state) => {
            state.isActive 
            ? state.isActive = false
            : state.isActive = true
        }
    }
})

export const { toggleWindow } = modalSlice.actions;

export default modalSlice.reducer;