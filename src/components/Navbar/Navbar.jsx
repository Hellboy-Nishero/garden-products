import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import { NavLink, Link } from 'react-router';
import { Heart, Moon, ShoppingBag, Sun, X } from 'lucide-react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import Button from '../Button/Button';
=======
>>>>>>> origin/margorita



const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD
    const dispatch = useDispatch();

    //toggles dark-mode after click
    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
    }
=======

>>>>>>> origin/margorita

    useEffect(() => {
        const resizeHandler = () => setWidth(window.innerWidth);
        window.addEventListener("resize", resizeHandler);

<<<<<<< HEAD
        (() => {window.removeEventListener("resize", resizeHandler)})
=======
        return () => window.removeEventListener("resize", resizeHandler);
>>>>>>> origin/margorita
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
                <Button className={"discount__title"}>1 day discount!</Button>
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
                            <Link to="/allproducts" onClick={() => setIsOpen(false)} className="link">All products</Link>
                            <Link to="/allsales" onClick={() => setIsOpen(false)} className="link">All sales</Link>
                            <h3 className="discount__title">1 day discount!</h3>
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