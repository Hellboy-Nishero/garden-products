import { createAsyncThunk } from '@reduxjs/toolkit'; // Import the createAsyncThunk function from Redux Toolkit to handle asynchronous actions

// Define the fetchProducts async action using createAsyncThunk
export const fetchProducts = createAsyncThunk(
  // The first argument is the action type, which follows the pattern 'sliceName/actionName'
  'products/fetchProducts',

   // The second argument is an asynchronous function that fetches data from the API
  async () => {
    // Send a GET request to the API endpoint to fetch all products
      const response = await fetch('https://exam-server-5c4e.onrender.com/products/all');
    
    // Check if the response status is OK (status code 200–299)
    if (!response.ok) {
      // If not, throw an error with the HTTP status code
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data from the response
    const data = await response.json();
   
     // Store the fetched products in localStorage for future access (serialized as a JSON string)
    localStorage.setItem('products', JSON.stringify(data));
    
    return data;
  }
);
