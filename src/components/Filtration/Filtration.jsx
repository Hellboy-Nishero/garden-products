import React, { useEffect, useState } from 'react'
import "./Filtration.scss";
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter, toggleDiscount } from '../../store/slices/filterSlice';

// Filtration component responsible for filtering and sorting products
const Filtration = ({discounted}) => {
    const dispatch = useDispatch();
<<<<<<< HEAD
    
    // Get the discount filter state from Redux store
    const isChecked = useSelector(state => state.filter.discountActive);
    
    // Local state to manage filter data, initialized with values from Redux store
    const [filterData, setFilterData] = useState(useSelector(state => state.filter))

    // Toggles the discount filter in Redux store
=======

    const isChecked = useSelector(state => state.filter.discountActive);

    const [filterData, setFilterData] = useState(useSelector(state => state.filter))


>>>>>>> origin/karina
    const handleToggleDiscount = () => {
        dispatch(toggleDiscount());
    }
    
<<<<<<< HEAD
    // Updates local filter state when input values change
=======

>>>>>>> origin/karina
    const changeInputHandler = (e) => {
        setFilterData(prev => ({...prev, [e.target.name]: e.target.value }));
    }

<<<<<<< HEAD
    // Applies filters whenever the filterData state is updated
=======
>>>>>>> origin/karina
    useEffect(() => {
        dispatch(applyFilter(filterData));
    }, [filterData]);


  return (
    <div className="filtration">
    {/* price filter section */}
    <div className="filtration__price">
        <span className="filtration__label">Price</span>
        <input
            type="number"
            className="filtration__input"
            name="minPrice"
            placeholder="from"
            value={filterData.minPrice}
            onChange={(e) => changeInputHandler(e)}
        />
        <input
            type="number"
            className="filtration__input"
            name='maxPrice'
            placeholder="to"
            value={filterData.maxPrice}
            onChange={(e) => changeInputHandler(e)}
        />
    </div>

    {/* Checkbox for filtering discounted items */}
    {
        discounted &&     
        <div className="filtration__discount">
            <label htmlFor="discounted" className="filtration__discount-label">
                Discounted items
            </label>
            <input type="checkbox" id="discounted" onClick={handleToggleDiscount} defaultChecked={isChecked ? true : false}/>
        </div>

    }


    {/* Sorting dropdown */}
    <div className="filtration__sort">
        <span className="filtration__label">Sorted</span>
        <select className="filtration__select" name='sorted' onChange={(e) => changeInputHandler(e)} value={filterData.sorted}>
            <option value="default">by default</option>
            <option value="price-asc">price (low to high)</option>
            <option value="price-desc">price (high to low)</option>
            <option value="discount">biggest discount</option>
            <option value="alphabet">alphabetically</option>
        </select>
    </div>
</div>

  )
}

export default Filtration
