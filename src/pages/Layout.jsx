import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        Navbar
        <main className='main'>
            <Outlet />
        </main>
        Footer
    </div>
  )
}

export default Layout