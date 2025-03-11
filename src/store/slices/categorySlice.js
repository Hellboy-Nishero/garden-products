import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: [
        {
            id: 1,
            name: "Fertilizer",
            image: "/src/pages/Categories/images/fertilizer.png",
            link: "/category/fertilizer",
          },
          {
            id: 2,
            name: "Protective products and septic tanks",
            image: "/src/pages/Categories/images/planting-material.png",
            link: "/category/protective-products",
          },
          {
            id: 3,
            name: "Planting material",
            image: "/src/pages/Categories/images/protective-products.png",
            link: "/category/planting-material",
          },
          {
            id: 4,
            name: "Tools and equipment",
            image: "/src/pages/Categories/images/tools-equipment.png",
            link: "/category/tools-equipment",
          },
          {
            id: 5,
            name: "Pots and planters",
            image: "/src/pages/Categories/images/pots-and-planters.png",
            link: "/category/pots-and-planters",
          },
    ],
}
const categoriesSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
})

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;