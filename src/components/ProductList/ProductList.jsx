import React, {useState, useEffect} from 'react'
import "./ProductList.scss";
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux';

// ProductList component displays a list of products with filtering and sorting functionality
const ProductList = ({products, sales}) => {
    // State for storing filtered products
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Extract filter and sorting values from Redux store
    const discounted = useSelector(state => state.filter.discountActive);
    const {minPrice, maxPrice, sorted} = useSelector(state => state.filter);

    // Determine which products should be displayed
    const currentProducts = sales ? products.filter(product => product.discont_price !== null) : products; //if sales = true, it shows products with sales only. Otherwise it shows all products (for "all sales")
  
    // Function to filter and sort products based on user selection
    const filterProducts = () => {
      let filtered = currentProducts;
      
      // Filter products to show only those with discounts if enabled
      if(discounted){
        filtered = filtered.filter(product => product.discont_price !== null); 
      }
  
       // Filter products based on price range
      filtered = filtered.filter(product => {
        const price = product.discont_price ?? product.price; 
        return price > minPrice && price < maxPrice;
      })
  
      // Sorting logic based on selected sorting criteria
      filtered.sort((a, b) => {
        const getPrice = product => product.discont_price ?? product.price;
        switch(sorted){
  
        //sort by price from low to high
          case "price-asc":
              return getPrice(a) - getPrice(b);
    
          //sort by price from high to low
          case "price-desc":
              return getPrice(b) - getPrice(a);
    
          //sort by biggest sale
          case "discount":
            const aSale = a.discont_price ? Math.round((a.price - a.discont_price) / a.price * 100) : 0;
            const bSale = b.discont_price ? Math.round((b.price - b.discont_price) / b.price * 100) : 0;
  
            //shows "a" earlier, if it has sale
            if (a.discont_price && !b.discont_price) return -1;
            if (!a.discont_price && b.discont_price) return 1;
            return bSale - aSale;

          //sort alphabetically
          case "alphabet":
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            return 0;
  
          default:
            return 0;
        };
      })
  
      // Update state with filtered and sorted products
      setFilteredProducts(filtered);
    };

    // Run filtering function whenever relevant dependencies change
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
      price={product.price}
      product={product} />
    )
  )
  : <p className='products-empty'>No products found</p>
}
  </div>
  )
}

export default ProductList