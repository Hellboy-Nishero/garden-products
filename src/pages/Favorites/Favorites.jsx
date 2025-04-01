import React from 'react'
import "./Favorites.scss";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filtration from '../../components/Filtration/Filtration';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector } from 'react-redux';


const Favorites = () => {

  const likedProduct = useSelector(state => state.favorite.liked);

  return (
    <div className='favorites'>
    <Breadcrumbs />
    <h1 className="page-title">Liked products</h1>
    <Filtration discounted={true} />
    <ProductList products={likedProduct} />
    </div>
  )
}

export default Favorites