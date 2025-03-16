import React from 'react'
import "./AllSales.scss";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filtration from '../../components/Filtration/Filtration';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector } from 'react-redux';

const AllSales = () => {

  const products = useSelector(state => state.products.currentProducts);

  return (
    <div className='all-sales'>
    <Breadcrumbs />
    <Filtration />
    <ProductList products={products} sales={true} />
    </div>
  )
}

export default AllSales