import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


const Layout = () => {
  return (
    <div className='main-container'>
        <Navbar />
        <main className='main'>
            <Outlet />
        </main>
        
        <Footer />
    </div>
  )
}

export default Layout