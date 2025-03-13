import React, {useState, useEffect} from 'react'
import "./ProductList.scss";
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux';


const ProductList = ({products}) => {

    const [filteredProducts, setFilteredProducts] = useState(products);
    const discounted = useSelector(state => state.filter.discountActive);
    const {minPrice, maxPrice, sorted} = useSelector(state => state.filter);
  
    const filterProducts = () => {
      let filtered = products;
      
      if(discounted){
        filtered = filtered.filter(product => product.discont_price !== null); // Фильтруем скидочные товары
      }
  
      filtered = filtered.filter(product => {
        const price = product.discont_price ?? product.price; // Берём скидочную цену, если есть
        return price > minPrice && price < maxPrice;
      })
  
      filtered.sort((a, b) => {
        const getPrice = product => product.discont_price ?? product.price;
        switch(sorted){
  
        //сортировка по возрастанию цены
          case "price-asc":
              return getPrice(a) - getPrice(b);
    
          //сортировка по уменьшению цены
          case "price-desc":
              return getPrice(b) - getPrice(a);
    
          //сортировка по наибольшей скидке
          case "discount":
            const aSale = a.discont_price ? Math.round((a.price - a.discont_price) / a.price * 100) : 0;
            const bSale = b.discont_price ? Math.round((b.price - b.discont_price) / b.price * 100) : 0;
  
            //показываем "а" раньше, если у него есть скидка
            if (a.discont_price && !b.discont_price) return -1;
            if (!a.discont_price && b.discont_price) return 1;
            return bSale - aSale;
  
          default:
            return 0;
        };
      })
  
  
      setFilteredProducts(filtered);
    };

      useEffect(() => {
        filterProducts();
      }, [products, discounted, minPrice, maxPrice, sorted]);


  return (
    <div className="products-grid">
    {products.length > 0 ? filteredProducts.map(product => (
      <ProductCard key={product.id}
      discont_price={product.discont_price}
      image={product.image}
      title={product.title}
      price={product.price} />
    )
  )
  : <p className='products-empty'>No products found</p>
}
  </div>
  )
}

export default ProductList