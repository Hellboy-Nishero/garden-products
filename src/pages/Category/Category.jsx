import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Filtration from "../../components/Filtration/Filtration";
import { Heart, ShoppingBag } from "lucide-react";
import "./Category.scss";

const categories = [
  { id: 1, name: "Fertilizers" },
  { id: 2, name: "Protective Products" },
  { id: 3, name: "Planting Material" },
  { id: 4, name: "Tools & Equipment" },
  { id: 5, name: "Pots and planters" },
];

const Category = () => {
  const { categoryId } = useParams(); // Получаем `categoryId` из URL
  const [products, setProducts] = useState([]); // Все товары
  const [filteredProducts, setFilteredProducts] = useState([]); // Отфильтрованные товары


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://exam-server-5c4e.onrender.com/products/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => product.categoryId === parseInt(categoryId));
    setFilteredProducts(filtered);
  }, [products, categoryId]);

  const category = categories.find((category) => category.id === parseInt(categoryId));

  return (
    <div className="category">
      <h1 className="category__title">{category ? category.name : "Category Not Found"}</h1>

      <Filtration products={products} onFilterChange={setFilteredProducts} />

      <div className="category__list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card"
              // onClick={() => handleCategoryClick(category.id)}
            >
              {product.discount && <div className="discount-badge">-{product.discount}%</div>}
              <Link to='/allproducts'>
                <img className="product-card__image"
                
                  src={`https://exam-server-5c4e.onrender.com${product.image}`}
                  alt={product.title} />
              </Link>
              <div className="product-icons">
                <Heart className="icon" />
                <ShoppingBag className="icon" />
              </div>

              <div className="card-footer">
                <h3 className="product-card__name">{product.title}</h3>
                <div className="product-card__price">
                  <span className="current-price">${product.price}</span>
                  {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="category__empty">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
