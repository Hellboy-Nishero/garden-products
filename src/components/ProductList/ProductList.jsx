import React from 'react'
import "./ProductList.scss";
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({products}) => {
  return (
    <div className="products-grid">
    {products && products.map(product => (
      <ProductCard key={product.id}
      discont={product.discount}
      image={product.image}
      title={product.title}
      price={product.price}
      oldPrice={product.oldPrice} />
    ))}
  </div>
  )
}

export default ProductList