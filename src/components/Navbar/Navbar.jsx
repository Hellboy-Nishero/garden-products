import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import { NavLink, Link } from 'react-router';
import { Heart, Moon, ShoppingBag, Sun, X } from 'lucide-react';



const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const [isOpen, setIsOpen] = useState(false);



    useEffect(() => {
        const resizeHandler = () => setWidth(window.innerWidth);
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, []);



  return (
    <>
        <nav className="navbar">
            <div className="nav-left">
                <img src="/logo.png" alt="" className="logo" />
                <label className="switch">
                    <input type="checkbox" />
                    <span className='slider'>
                    <Sun className='icon' />
                    <Moon className='icon' />
                    </span>
                </label>
            </div>
            {width >= 768 && 
            <div className="nav-mid">
                <h3 className="discount">1 day discount!</h3>
                <div className="links">
                    <NavLink to="/" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>Main Page</NavLink>
                    <NavLink to="/categories" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>Categories</NavLink>
                    <NavLink to="/allproducts" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>All products</NavLink>
                    <NavLink to="/allsales" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>All sales</NavLink>
                </div>
            </div>}
            <div className="nav-right">
                <Link to={"/cart"}><ShoppingBag className='icon' /></Link>
                <Link to={"/favorites"}><Heart className='icon' /></Link>
                {width < 768 &&
                <>
                <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                </div>
                <div className={`menu ${isOpen ? "open" : ""}`}>
                    <X />
                    <Link to="/" onClick={() => setIsOpen(false)} className="link">Main Page</Link>
                    <Link to="/categories" onClick={() => setIsOpen(false)} className="link">Categories</Link>
                    <Link to="/allproducts" onClick={() => setIsOpen(false)} className="link">All products</Link>
                    <Link to="/allsales" onClick={() => setIsOpen(false)} className="link">All sales</Link>
                    <h3 className="discount">1 day discount!</h3>
                </div>
                </>
                }

            </div>
        </nav>
    </>
    )
}

export default Navbar