import React from 'react';

const ProductItem = ({name, index, price, stock, addProductToBasket}) => {

    const handleClick = () => {
        addProductToBasket(index)
    };

    return(
        <ul>
            <li>
                <h3>Name: {name}</h3>
                <p>Price: £{price}</p>
                <p>Stock: {stock}</p>
                { stock > 0 ? <button onClick={handleClick}>Add to basket</button> : <p>Out of stock</p>}
            </li>
        </ul>
    );
};

export default ProductItem;