import React from "react";
import BasketItem from './BasketItem';
import DiscountForm from "./DiscountForm";
import {Link} from 'react-router-dom';

const Basket = ({basket, removeProductFromBasket, basketTotal, addDiscount, onDiscountSubmit}) => {

    const BasketNodes = basket.map((product, index) => {
        return <BasketItem key={index} index={index} name={product.name} price={product.price} stock={product.stock} image={product.image}removeProductFromBasket={removeProductFromBasket}/>
    });


    return(
        <>
            <h1>Basket:</h1>
            <ul>
                {BasketNodes}
            </ul>
            <p>Basket total: £{basketTotal}</p>
            <br></br>
            <DiscountForm onDiscountSubmit={(submittedDiscount) => addDiscount(submittedDiscount)}/>
            <p>Basket total after discount: £{onDiscountSubmit()}</p>
            <br></br>
            {basket.length > 0 ?
                <button>
                    <Link to='/checkout'>Checkout</Link>
                </button>
            : <p>Basket is empty</p>}
        
        </>
    );
};

export default Basket;