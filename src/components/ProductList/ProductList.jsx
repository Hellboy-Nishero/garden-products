import React from 'react'
import "./ProductList.scss";
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({products}) => {
  return (
    <div className="products-grid">
    {products && products.map(product => (
      <ProductCard key={product.id}
      discont_price={product.discont_price}
      image={product.image}
      title={product.title}
      price={product.price} />
    ))}
  </div>
  )
}

export default ProductList