import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../api/productApi'


// Загрузка данных из localStorage
const savedFilters = JSON.parse(localStorage.getItem('filters')) || { priceFrom: '', priceTo: '', sort: 'default', discounted: false };
const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
  products: [],  
  filteredProducts: [],  
  filters: savedFilters, // Фильтры
  favorites: savedFavorites, // Избраннoе
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
    setFilters: (state, action) => { //Фильтры
      state.filters = action.payload;
      localStorage.setItem('filters', JSON.stringify(state.filters)); // Сохраняем фильтр
    },
    toggleFavorite: (state, action) => { // Избраннoе
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter(id => id !== productId);
      } else {
        state.favorites.push(productId);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Сохраняем избранное
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
});
export const { setProducts, setFilteredProducts, setFilters, toggleFavorite } = productSlice.actions; // два последних
export default productSlice.reducer;