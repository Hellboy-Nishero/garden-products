import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.scss";
import { NavLink, Link} from 'react-router';
import { Heart, Moon, ShoppingBag, Sun, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import Button from '../Button/Button';
import { showDailyProduct } from '../../store/slices/productSlice';



const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const cartCounter = useSelector(state => state.cart.count);

    const likedCounter = useSelector(state => state.favorite.count);

    const menuRef = useRef(null);

    // toggles dark-mode after click
    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
    }

    // displays product of the day
    const handleDisplayDailyProduct = () => {
        if(isOpen) setIsOpen(false) // closes burger-menu if active
        dispatch(showDailyProduct());
    }

    const toggleMenu = () => {
        let timeout = 0;
        switch(isOpen){
            case true:
                setIsOpen(false);
                timeout = setTimeout(() => {
                    menuRef.current.style.display = "none";
                }, 400)
                return () => clearTimeout(timeout);

            case false:
                setTimeout(() => {
                    setIsOpen(true);
                    menuRef.current.style.display = "flex"
                }, 10)
                return () => clearTimeout(timeout);


            default:
                return menuRef.current.style.display = "none";
        }
    }

    useEffect(() => {
        const resizeHandler = () => setWidth(window.innerWidth);
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
                    {
                        likedCounter !== 0 &&
                        <span className='count'>{likedCounter}</span>
                    }
                </div>
                <div className="icon-item">
                    <Link to={"/cart"}><ShoppingBag className='icon' /></Link>
                    {
                        cartCounter !== 0 &&
                        <span className='count'>{cartCounter}</span>
                    }
                </div>
                {width < 768 &&
                <>
                <div className="burger" onClick={toggleMenu}>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                </div>
                <div ref={menuRef} className={`menu ${isOpen ? "open" : ""}`}>
                    <div className="menu-content">
                        <X className='icon' onClick={toggleMenu} />
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