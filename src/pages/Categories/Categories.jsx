import React from 'react';
import "./categories.scss";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Categories = () => {
    const categories = useSelector((state) => state.category.categories);
    const navigate = useNavigate(); 

    const handleCategoryClick = (categoryId) => {
        navigate(`/categories/${categoryId}`); 
    };

    return (
        <div className='categories'>
            <div className="categories__container">
                <h2 className="categories__title">Categories</h2>
                <div className="categories__list">
                    {categories && categories.map((category) => (
                        <div 
                            key={category.id} 
                            className="category-card"
                            onClick={() => handleCategoryClick(category.id)} 
                        >
                            {category.image && (
                                <img 
                                    src={category.image} 
                                    alt={category.name} 
                                    className="category-card__image"
                                />
                            )}
                         
                            <Link to={`/categories/${category.id}`} className="category-card__link">
                                {category.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
