import React, {useState} from "react";
import BasketItem from './BasketItem';
import DiscountForm from "./DiscountForm";
import {Link} from 'react-router-dom';

const Basket = ({basket, removeProductFromBasket, setCheckoutTotal}) => {

    const [discount, setDiscount] = useState();

    const BasketNodes = basket.map((product, index) => {
        return <BasketItem key={index} index={index} name={product.name} price={product.price} stock={product.stock} image={product.image}removeProductFromBasket={removeProductFromBasket}/>
    });

    const basketTotal = basket.reduce((runningTotal, product) => {
        const currentTotal =  runningTotal + product.price
        setCheckoutTotal(currentTotal)
        return currentTotal;
    }, 0);

    const discountApplied = () => {
        if (discount === 'happy10') {
            return (basketTotal * 0.9)
        } else {
            return basketTotal;
        };
    };

    const addDiscount = (submittedDiscount) => {
        setDiscount(submittedDiscount)
    };


    return(
        <>
            <h1>Basket:</h1>
            <ul>
                {BasketNodes}
            </ul>
            <p>Basket total: £{basketTotal}</p>
            <br></br>
            <DiscountForm onDiscountSubmit={(code) => addDiscount(code)}/>
            <p>Basket total after discount: £{discountApplied()}</p>
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