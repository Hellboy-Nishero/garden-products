import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
      const response = await fetch('https://exam-server-5c4e.onrender.com/products/all');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
   
    localStorage.setItem('products', JSON.stringify(data));
    
    return data;
  }
);
