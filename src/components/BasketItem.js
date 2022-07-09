import React from 'react';

const BasketItem = ({index, name, price, image, removeProductFromBasket}) => {

    const handleClick = () => {
        removeProductFromBasket(index)
    };

    return(
            <li>
                <p>{name}</p>
                {image ? <img src={image} alt={name} /> : null}
                <p>£{price}</p>
                <button onClick={handleClick}>Remove item</button>
            </li>
    );
};

export default BasketItem;