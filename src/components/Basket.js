import React from 'react';
import BasketItem from './BasketItem';
import {Link} from 'react-router-dom';

const Basket = ({basket, removeProductFromBasket}) => {

    const BasketNodes = basket.map((product, index) => {
        return <BasketItem key={index} index={index} name={product.name} price={product.price} stock={product.stock} removeProductFromBasket={removeProductFromBasket}/>
    });

    return(
        <>
            {BasketNodes}
            {basket.length > 0 ?
                <button>
                    <Link to='/checkout'>Checkout</Link>
                </button>
            : null}
        
        </>
    );
};

export default Basket;