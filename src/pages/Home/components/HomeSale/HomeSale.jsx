import React from "react"; // Import React
import "./HomeSale.scss"; // Import styles for the HomeSale component
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import { Link } from "react-router-dom"; // Import Link for navigation
import SmallButton from "../Buttons/SmallButton"; // Import a reusable small button component
import ProductCard from "../../../../components/ProductCard/ProductCard"; // Import the product card component

const RandomSale = () => {
  // Get the list of products from the Redux store
  const { currentProducts } = useSelector((state) => state.products);
  
  // Filter products that have a discount price
  const products = currentProducts.filter(product => product.discont_price !== null);

  // Function to get a random selection of products
  const getRandomProducts = (filteredProducts, count) => {
    return filteredProducts && filteredProducts.length > 0
      ? [...filteredProducts].sort(() => 0.5 - Math.random()).slice(0, count) // Shuffle and select `count` items
      : [];
  };

  const productsRandom = getRandomProducts(products, 4); // Select 4 random discounted products

  return (
    <div className="sale">
      <div className="container">
        
        <div className="container__item">
          <SmallButton
            path="/all-sales"
            title="Sale"
            children={"All sales"} // Button leading to all sales
          />
        </div>

        <div className="container__list">
          {productsRandom &&
            productsRandom.map((product) => (
              <ProductCard 
                key={product.id} 
                discont_price={product.discont_price} 
                image={`${product.image}`} 
                title={product.title} 
                price={product.price} 
                product={product} // Render product details
              />
            ))}
        </div>
        
        <div className="container__btn-2-position">
          <Link to={`/all-sales`}>
            <button className="container__btn-2">All sales</button> {/* Button linking to all sales page */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RandomSale; // Export the RandomSale component
