import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const cartCheckSales = createAsyncThunk("cart/checkSales", async(_, {getState}) => {
    const currentProducts = getState().products.currentProducts;
    return currentProducts;
})

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        count: JSON.parse(localStorage.getItem("cartCount")) || 0,
        hasDiscount: false
    },
    reducers: {
        addToCart: (state, action) => {
            let foundProduct = state.cart.find(product => product.id === action.payload.id);
            if(foundProduct){
                const price = foundProduct.discont_price ?? foundProduct.price;
                state.cart = state.cart.map(product => {
                    if(product.id === foundProduct.id){
                        return {...product, count: product.count + action.payload.count, subtotal: (product.count + action.payload.count) * price}
                    } else {
                        return product
                    }
                })
            } else {
                const price = action.payload.discont_price ?? action.payload.price;
                state.cart.push({...action.payload, subtotal: action.payload.count * price});
            }
            state.count = state.cart.length;
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("cartCount", JSON.stringify(state.count));
        },
        increaseProduct: (state, action) => {
            const price = action.payload.discont_price ?? action.payload.price;
            state.cart = state.cart.map(product => 
                product.id === action.payload.id
                ? {...product, count: product.count + 1, subtotal: (product.count + 1) * price}
                : product
            )
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        decreaseProduct: (state, action) => {
            const price = action.payload.discont_price ?? action.payload.price;
            state.cart = state.cart.map(product => {
                if(product.id === action.payload.id){
                    if((product.count - 1) !== 0){
                        return {...product, count: product.count - 1, subtotal: (product.count - 1) * price};
                    } else {
                        return null;
                    }
                } else return product;
            }
            ).filter(product => product !== null);
            state.count = state.cart.length;
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("cartCount", JSON.stringify(state.count));
        },
        deleteProduct: (state, action) => {
            state.cart = state.cart.map(product => 
                product.id === action.payload.id
                ? null
                : product
            ).filter(product => product !== null);
            state.count = state.cart.length;
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("cartCount", JSON.stringify(state.count));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cartCheckSales.fulfilled, (state, action) => {
            //check if products that stored in cart are having correct sales according to current products
            const currentProducts = action.payload;
            state.cart = state.cart.map(cartProduct => {
                let updatedProduct = currentProducts.find(product => product.id === cartProduct.id);
                if(updatedProduct){
                    const price = updatedProduct.discont_price ?? updatedProduct.price;
                    return {...cartProduct, discont_price: updatedProduct.discont_price || null, subtotal: cartProduct.count * price}
                } else return cartProduct
            })

            localStorage.setItem("cart", JSON.stringify(state.cart));
        })
    }
})

export const { addToCart, increaseProduct, decreaseProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;