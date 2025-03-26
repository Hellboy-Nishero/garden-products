import React, { useEffect } from 'react';
import "./categories.scss";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { fetchCategories } from '../../store/api/category';

const Categories = () => {

    const { categories } = useSelector((state) => state.category);

    const dispatch = useDispatch();

    useEffect(() => {
        if(categories.length === 0){
            dispatch(fetchCategories());
        }
    })


    return (
        <div className='categories'>
            <div className="categories__container">
                <Breadcrumbs />
                <h2 className="page-title">Categories</h2>
                <div className="categories__list">
                    {categories.map((category) => (
                        <Link key={category.id} to={`/categories/${category.title}`} className="category-card">
                            {category.image && (
                                <img
                                    src={`https://exam-server-5c4e.onrender.com${category.image}`}
                                    alt={category.title}
                                    className="category-card__image"
                                />
                            )}
                            <span className="category-card__link">{category.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;    
