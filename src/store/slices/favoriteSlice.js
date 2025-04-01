import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const favoriteCheckSales = createAsyncThunk("favorite/checkSales", async(_, {getState}) => {
    const currentProducts = getState().products.currentProducts;
    return currentProducts;
})

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        liked: JSON.parse(localStorage.getItem("liked"))|| [],
        count: JSON.parse(localStorage.getItem("likedCount")) || 0
    },
    reducers: {
        toggleLike: (state, action) => {
            if(state.liked.find(product => product.id === action.payload.id)){
                state.liked = state.liked.map(product => 
                    product.id === action.payload.id 
                    ? null
                    : product
                ).filter(product => product !== null);
            } else {
                state.liked.push(action.payload);
            }
            state.count = state.liked.length;

            localStorage.setItem("liked", JSON.stringify(state.liked));
            localStorage.setItem("likedCount", JSON.stringify(state.count));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(favoriteCheckSales.fulfilled, (state, action) => {
            const currentProducts = action.payload;
            state.liked = state.liked.map(likedProduct => {
                const updatedProduct = currentProducts.find(product => product.id === likedProduct.id);
                if(updatedProduct){
                    const price = updatedProduct.discont_price ?? updatedProduct.price;
                    return {...likedProduct, discont_price: updatedProduct.discont_price || null}
                } else return likedProduct;
            })

            localStorage.setItem("liked", JSON.stringify(state.liked));
        })
    }
})

export const { toggleLike } = favoriteSlice.actions;

export default favoriteSlice.reducer;