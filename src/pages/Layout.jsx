<<<<<<< HEAD
import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const Layout = () => {

  const dark = useSelector(state => state.theme.isDark);


  return (
    <div className={`main-container ${dark ? "dark" : ""}`}>
=======
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'

const Layout = () => {
  return (
    <div className='main-container'>
>>>>>>> origin/margorita
        <Navbar />
        <main className='main'>
            <Outlet />
        </main>
        Footer
    </div>
  )
}

export default Layout