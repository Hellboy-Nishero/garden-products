// import { createAsyncThunk } from '@reduxjs/toolkit';


// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     const response = await fetch('https://exam-server-5c4e.onrender.com/products/all');
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   }
// );


import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // Проверяем, есть ли кэшированные данные
    const cachedData = localStorage.getItem('products');
    if (cachedData) {
      return JSON.parse(cachedData); // Если есть — возвращаем
    }

    // Если данных нет — запрашиваем с сервера
    const response = await fetch('https://exam-server-5c4e.onrender.com/products/all');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Сохраняем в localStorage перед возвратом
    localStorage.setItem('products', JSON.stringify(data));
    
    return data;
  }
);
