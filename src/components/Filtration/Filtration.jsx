// import React from 'react'
// import "./Filtration.scss";


// const Filtration = ({discounted}) => {
//   return (
//     <div className="filtration">
    
//     <div className="filtration__price">
//         <span className="filtration__label">Price</span>
//         <input
//             type="number"
//             className="filtration__input"
//             placeholder="from"
//         />
//         <input
//             type="number"
//             className="filtration__input"
//             placeholder="to"
//         />
//     </div>
//     {
//         discounted &&     
//         <div className="filtration__discount">
//             <label htmlFor="discounted" className="filtration__label">
//                 Discounted items
//             </label>
//             <input type="checkbox" id="discounted" />
//         </div>

//     }
//     <div className="filtration__sort">
//         <span className="filtration__label">Sorted</span>
//         <select className="filtration__select">
//             <option value="default">by default</option>
//             <option value="price-asc">price (low to high)</option>
//             <option value="price-desc">price (high to low)</option>
//             <option value="discount">biggest discount</option>
//         </select>
//     </div>
// </div>

//   )
// }
// export default Filtration




import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../store/slices/productSlice';
import './Filtration.scss';

const Filtration = ({ discounted }) => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.products.filters);
  
  const [priceFrom, setPriceFrom] = useState(filters.priceFrom);
  const [priceTo, setPriceTo] = useState(filters.priceTo);
  const [sort, setSort] = useState(filters.sort);
  const [discount, setDiscount] = useState(filters.discounted);

  useEffect(() => {
    dispatch(setFilters({ priceFrom, priceTo, sort, discounted: discount }));
  }, [priceFrom, priceTo, sort, discount, dispatch]);

  return (
    <div className="filtration">
      <div className="filtration__price">
        <span className="filtration__label">Price</span>
        <input
          type="number"
          className="filtration__input"
          placeholder="from"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
        />
        <input
          type="number"
          className="filtration__input"
          placeholder="to"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
        />
      </div>

      {discounted && (
        <div className="filtration__discount">
          <label htmlFor="discounted" className="filtration__label">Discounted items</label>
          <input
            type="checkbox"
            id="discounted"
            checked={discount}
            onChange={(e) => setDiscount(e.target.checked)}
          />
        </div>
      )}

      <div className="filtration__sort">
        <span className="filtration__label">Sorted</span>
        <select className="filtration__select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">by default</option>
          <option value="price-asc">price (low to high)</option>
          <option value="price-desc">price (high to low)</option>
          <option value="discount">biggest discount</option>
        </select>
      </div>
    </div>
  );
};

export default Filtration;
