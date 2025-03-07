import React from "react";
import "./Filtration.scss";

const Filtration = () => {
    return (
        <div className="filtration">
            {/* Блок цены */}
            <div className="filtration__price">
                <span className="filtration__label">Price</span>
                <input
                    type="number"
                    className="filtration__input"
                    placeholder="from"
                />
                <input
                    type="number"
                    className="filtration__input"
                    placeholder="to"
                />
            </div>

            {/* Чекбокс скидок */}
            <div className="filtration__discount">
                <label htmlFor="discounted" className="filtration__label">
                    Discounted items
                </label>
                <input type="checkbox" id="discounted" />
            </div>

            {/* Сортировка */}
            <div className="filtration__sort">
                <span className="filtration__label">Sorted</span>
                <select className="filtration__select">
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