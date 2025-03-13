import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import { useSelector } from 'react-redux'

const Layout = () => {

  const dark = useSelector(state => state.theme.isDark);


  return (
    <div className={`main-container ${dark ? "dark" : ""}`}>
        <Navbar />
        <main className='main'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout