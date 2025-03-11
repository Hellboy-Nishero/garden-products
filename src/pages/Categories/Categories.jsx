import React from 'react';
import "./categories.scss";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Categories = () => {
    const categories = useSelector((state) => state.category.categories);
    const navigate = useNavigate(); 


    return (
        <div className='categories'>
            <div className="categories__container">
                <Breadcrumbs />
                <h2 className="page-title">Categories</h2>
                <div className="categories__list">
                    {categories && categories.map((category) => (
                        <Link
                        key={category.id} 
                        to={`/categories/${category.name}`}>
                        <div 
                            className="category-card"
                        >
                            {category.image && (
                                <img 
                                    src={category.image} 
                                    alt={category.name} 
                                    className="category-card__image"
                                />
                            )}
                         
                            <span className="category-card__link">
                                {category.name}
                            </span>
                        </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
