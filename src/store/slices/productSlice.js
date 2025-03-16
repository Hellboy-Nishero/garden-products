import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../api/productApi'


const initialState = {
  products: JSON.parse(localStorage.getItem('products')) || [],  //original array of products from api
  dailyProduct: null,
  dailyProductActive: false,
  currentProducts: [] //copy of products with product of the day inserted
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    initDailyProduct: (state) => {
      if(state.products.length !== 0){
        let newDailyProduct = {...state.products[Math.floor(Math.random()*state.products.length)]}; //search random product i nthe array
        newDailyProduct.discont_price = Number((newDailyProduct.price / 2).toFixed(2)); //set discount property to product of the day
        state.dailyProduct = newDailyProduct;
      }
    },
    showDailyProduct: (state) => {
      state.dailyProductActive = true;
    },
    closeDailyProduct: (state) => {
      state.dailyProductActive = false;
    },
    initCurrentProducts: (state) => {
      const { id } = state.dailyProduct; 
      state.currentProducts = [...state.products];
      let index = state.currentProducts.findIndex(product => product.id === id);
      if(index !== -1){
        state.currentProducts.splice(index, 1, state.dailyProduct);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.currentProducts = [...action.payload];
    })
  }
});

export const { setProducts, initDailyProduct, showDailyProduct, closeDailyProduct, initCurrentProducts } = productSlice.actions; 
export default productSlice.reducer;