import React, { useEffect } from "react";
import "./HomeSale.scss"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SmallButton from "./SmallButton"
import ProductCard from "../../../components/ProductCard/ProductCard"

const RandomSale = () => {
  const { currentProducts } = useSelector((state) => state.products);
  const products = currentProducts.filter(products => products.discont_price !== null )

  const getRandomProducts = (filteredProducts, count) => {
    return filteredProducts && filteredProducts.length > 0
      ? [...filteredProducts].sort(() => 0.5 - Math.random()).slice(0, count)
      : [];
  };

  const productsRandom = getRandomProducts(products, 4);

  return (
    <div className="sale">
      <div className="container">
        
        <div className="container__item">
        <SmallButton
            path="/all-sales"
            title="Sale"
            children={"All sales"}
          />
        </div>

        <div className="container__list">
          {productsRandom &&
            productsRandom.map((product) => (
              <ProductCard key={product.id} discont_price={product.discont_price} image={`${product.image}`} title={product.title} price={product.price}/>
            ))}
        </div>
        <div className="container__btn-2-position">
          <Link to={`/all-sales`}>
            <button className="container__btn-2">All sales</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RandomSale;