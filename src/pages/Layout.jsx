import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/api/productApi';
import { initCurrentProducts, initDailyProduct } from '../store/slices/productSlice';
import DailyProduct from '../components/DailyProduct/DailyProduct';
import { favoriteCheckSales } from '../store/slices/favoriteSlice';
import { cartCheckSales } from '../store/slices/cartSlice';

const Layout = () => {
  const dark = useSelector(state => state.theme.isDark);
  const products = useSelector(state => state.products.products);
  const dailyProduct = useSelector(state => state.products.dailyProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    if(products.length === 0){
      dispatch(fetchProducts()); 
    }
    if(products.length > 0){
      dispatch(initDailyProduct());
      dispatch(initCurrentProducts());
    }
    
  }, [dispatch, products]);


  useEffect(() => {
    dispatch(cartCheckSales());
    dispatch(favoriteCheckSales())
  }, [])


  return (
    <div className={`main-container ${dark ? "dark" : ""}`}>
        <Navbar />
        <main className='main'>
            {dailyProduct && <DailyProduct />}
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout