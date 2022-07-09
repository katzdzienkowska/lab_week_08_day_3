import React from 'react';

const ProductItem = ({name, index, price, stock, image, addProductToBasket}) => {

    const handleClick = () => {
        addProductToBasket(index)
    };

    return(
            <li>
                <h3>Name: {name}</h3>
                <img src={image} alt={name} />
                <p>Price: £{price}</p>
                <p>Stock: {stock}</p>
                { stock > 0 ? <button onClick={handleClick}>Add to basket</button> : <p>Out of stock</p>}
            </li>
    );
};

export default ProductItem;