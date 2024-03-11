import React from 'react';
import './basket.scss';


const basket = () => {
    return (
        <>
            <div className="basket">
                <i className="fas fa-shopping-basket"></i>
                <span className="basket__count">0</span>
            </div>
        </>
    );
};

export default basket;