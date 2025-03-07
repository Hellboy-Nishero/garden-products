import React, { useEffect, useState } from 'react';
import Filtration from '../../components/Filtration/Filtration';
import './AllProducts.scss';
import { Heart, ShoppingBag } from 'lucide-react';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://exam-server-5c4e.onrender.com/products/all');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error('Error loading products:', err);
      }
    };
  
    fetchProducts();
  }, []);
  
useEffect(()  => {
  console.log(products)
}, [products])

  const handleFilterChange = (filtered) => {
    setFilteredProducts(filtered);
  };

  return (
    <div className="all-products">
      <h1 className="page-title">All products</h1>
      <Filtration products={products} onFilterChange={handleFilterChange} />
      <div className="products-grid">

        {filteredProducts && filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            {product.discont && (
              <div className="discont-badge">-{product.discont}%</div>
            )}
            <img className="product-image" src={`https://exam-server-5c4e.onrender.com${product.image}`} alt={product.name} />
            
            <div className="product-icons">
              <Heart className="icon" />
              <ShoppingBag className="icon" />
            </div>

            <div className='card_footer'>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                  {product.oldPrice && (
                    <span className="old-price">${product.oldPrice}</span>
                 )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
