import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../api/productApi'

const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
  products: JSON.parse(localStorage.getItem('products')) || [],  
  filteredProducts: [],  
  favorites: savedFavorites, 
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;  
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;  
    },    
    toggleFavorite: (state, action) => { 
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter(id => id !== productId);
      } else {
        state.favorites.push(productId);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); 
  }},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
});

export const { setProducts, setFilteredProducts, toggleFavorite } = productSlice.actions; 
export default productSlice.reducer;