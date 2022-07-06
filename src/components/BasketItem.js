import React from 'react';

const BasketItem = ({index, name, price, removeProductFromBasket}) => {

    const handleClick = () => {
        removeProductFromBasket(index)
    };

    return(
       <ul>
            <li>
                <p>{name}</p>
                <p>£{price}</p>
                <button onClick={handleClick}>Remove item</button>
            </li>
       </ul>
    );
};

export default BasketItem;