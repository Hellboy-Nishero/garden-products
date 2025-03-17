import React, { useEffect, useState } from 'react'
import "./Filtration.scss";
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter, toggleDiscount } from '../../store/slices/filterSlice';

const Filtration = ({discounted}) => {
    const dispatch = useDispatch();

    const isChecked = useSelector(state => state.filter.discountActive);

    const [filterData, setFilterData] = useState(useSelector(state => state.filter))


    const handleToggleDiscount = () => {
        dispatch(toggleDiscount());
    }
    

    const changeInputHandler = (e) => {
        setFilterData(prev => ({...prev, [e.target.name]: e.target.value }));
    }

    useEffect(() => {
        dispatch(applyFilter(filterData));
    }, [filterData]);


  return (
    <div className="filtration">
    {/* price section */}
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

    {/* sales checkbox */}
    {
        discounted &&     
        <div className="filtration__discount">
            <label htmlFor="discounted" className="filtration__discount-label">
                Discounted items
            </label>
            <input type="checkbox" id="discounted" onClick={handleToggleDiscount} defaultChecked={isChecked ? true : false}/>
        </div>

    }


    {/* sorting */}
    <div className="filtration__sort">
        <span className="filtration__label">Sorted</span>
        <select className="filtration__select" name='sorted' onChange={(e) => changeInputHandler(e)} value={filterData.sorted}>
            <option value="default">by default</option>
            <option value="price-asc">price (low to high)</option>
            <option value="price-desc">price (high to low)</option>
            <option value="discount">biggest discount</option>
        </select>
    </div>
</div>

  )
}

export default Filtration
