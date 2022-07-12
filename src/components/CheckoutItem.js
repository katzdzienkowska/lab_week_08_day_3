import React from 'react';

const CheckoutItem = ({index, name, price, removeProductFromBasket}) => {

    const handleClick = () => {
        removeProductFromBasket(index)
    };

    return(
            <li>
                <p>{name}: £{price}</p>
                <button onClick={handleClick}>Remove item</button>
            </li>
    );
};

export default CheckoutItem;