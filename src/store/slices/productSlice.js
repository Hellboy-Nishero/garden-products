import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../api/productApi'


const initialState = {
<<<<<<< HEAD
  // Array of products loaded from localStorage or an empty array if no data exists
=======
>>>>>>> origin/karina
  products: JSON.parse(localStorage.getItem('products')) || [],  //original array of products from api
  dailyProduct: null,
  dailyProductActive: false,
  currentProducts: [] //copy of products with product of the day inserted
};

<<<<<<< HEAD
// Create the product slice to manage the state of products
const productSlice = createSlice({
  name: 'products',
  initialState, // Initial state for the slice
  reducers: {
    // Action to set the list of products in the state
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // Action to initialize the product of the day
=======
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
>>>>>>> origin/karina
    initDailyProduct: (state) => {
      if(state.products.length !== 0){
        let newDailyProduct = {...state.products[Math.floor(Math.random()*state.products.length)]}; //search random product i nthe array
        newDailyProduct.discont_price = Number((newDailyProduct.price / 2).toFixed(2)); //set discount property to product of the day
        state.dailyProduct = newDailyProduct;
      }
    },
<<<<<<< HEAD
    // Action to activate the visibility of the product of the day
    showDailyProduct: (state) => {
      state.dailyProductActive = true;
    },
    // Action to deactivate the visibility of the product of the day
    closeDailyProduct: (state) => {
      state.dailyProductActive = false;
    },
     // Action to initialize the current list of products (with the product of the day on top)
    initCurrentProducts: (state) => {
      // Copy the list of all products to currentProducts
      const { id } = state.dailyProduct; 
      state.currentProducts = [...state.products];
      // Find the index of the product of the day in the current list
      let index = state.currentProducts.findIndex(product => product.id === id);
      if(index !== -1){
        // Replace the product of the day at the found index
=======
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
>>>>>>> origin/karina
        state.currentProducts.splice(index, 1, state.dailyProduct);
      }
    }
  },
<<<<<<< HEAD
  // Extra reducers to handle asynchronous actions
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // When the fetch request is fulfilled, set the products data in the state
=======
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
>>>>>>> origin/karina
      state.products = action.payload;
      state.currentProducts = [...action.payload];
    })
  }
});

export const { setProducts, initDailyProduct, showDailyProduct, closeDailyProduct, initCurrentProducts } = productSlice.actions; 
export default productSlice.reducer;