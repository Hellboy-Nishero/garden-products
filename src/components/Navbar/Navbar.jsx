import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import { NavLink, Link } from 'react-router';
import { Heart, Moon, ShoppingBag, Sun, X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import Button from '../Button/Button';
import { showDailyProduct } from '../../store/slices/productSlice';



const Navbar = () => {

    const [width, setWidth] = useState(window.outerWidth);

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    // toggles dark-mode after click
    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
    }

    // displays product of the day
    const handleDisplayDailyProduct = () => {
        if(isOpen) setIsOpen(false) // closes burger-menu if active
        dispatch(showDailyProduct());
    }

    useEffect(() => {
        const resizeHandler = () => setWidth(window.outerWidth);
        window.addEventListener("resize", resizeHandler);

        return () => {window.removeEventListener("resize", resizeHandler)}
    }, []);



  return (
    <>
        <nav className="navbar">
            <div className="nav-left">
                <img src="/logo.png" alt="" className="logo" />
                <label className="switch">
                    <input type="checkbox" />
                    <span onClick={toggleThemeHandler} className='slider'>
                    <Sun className='icon' />
                    <Moon className='icon' />
                    </span>
                </label>
            </div>
            {width >= 768 && 
            <div className="nav-mid">
                <Button className={"discount__title"} onClick={handleDisplayDailyProduct}>1 day discount!</Button>
                <div className="links">
                    <NavLink to="/" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>Main Page</NavLink>
                    <NavLink to="/categories" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>Categories</NavLink>
                    <NavLink to="/all-products" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>All products</NavLink>
                    <NavLink to="/all-sales" className={({ isActive }) => `link ${isActive ? "active" : ""}`}>All sales</NavLink>
                </div>
            </div>}
            <div className="nav-right">
                <div className="icon-item">
                    <Link to={"/favorites"}><Heart className='icon' /></Link>
                    <span className="count">1</span>
                </div>
                <div className="icon-item">
                    <Link to={"/cart"}><ShoppingBag className='icon' /></Link>
                    <span className="count">10</span>
                </div>
                {width < 768 &&
                <>
                <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                </div>
                <div className={`menu ${isOpen ? "open" : ""}`}>
                    <div className="menu-content">
                        <X className='icon' onClick={() => setIsOpen(false)} />
                            <div className="menu-links">
                            <Link to="/" onClick={() => setIsOpen(false)} className="link">Main Page</Link>
                            <Link to="/categories" onClick={() => setIsOpen(false)} className="link">Categories</Link>
                            <Link to="/all-products" onClick={() => setIsOpen(false)} className="link">All products</Link>
                            <Link to="/all-sales" onClick={() => setIsOpen(false)} className="link">All sales</Link>
                            <Button className="discount__title" onClick={handleDisplayDailyProduct}>1 day discount!</Button>
                            </div>
                    </div>
                </div>
                </>
                }

            </div>
        </nav>
    </>
    )
}

export default Navbar