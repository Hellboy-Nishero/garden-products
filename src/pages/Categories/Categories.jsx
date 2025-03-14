import React from 'react';
import "./categories.scss";
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Categories = () => {
    
    const { categories } = useSelector((state) => state.category);

    return (
        <div className='categories'>
            <div className="categories__container">
                <Breadcrumbs />
                <h2 className="page-title">Categories</h2>
                <div className="categories__list">
                    {categories.map((category) => (
                        <Link key={category.id} to={`/categories/${category.title}`}>
                            <div className="category-card">
                                {category.image && (
                                    <img 
                                    src={`https://exam-server-5c4e.onrender.com${category.image}`} 
                                    alt={category.title} 
                                    className="category-card__image"
                                />
                                
                                )}
                                <span className="category-card__link">{category.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;    