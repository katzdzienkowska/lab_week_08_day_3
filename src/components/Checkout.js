import React from 'react';
import CheckoutItem from './CheckoutItem';

const Checkout = ({basket, onDiscountSubmit, removeProductFromBasket, submitOrder}) => {

    const CheckoutNodes = basket.map((product, index) => {
        return <CheckoutItem key={index} index={index} name={product.name} price={product.price} removeProductFromBasket={removeProductFromBasket}/>
    });

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        submitOrder();
    }

    return(
        
        <> 
            <h2>Products added:</h2>
            {CheckoutNodes}
            <p>Total: £{onDiscountSubmit()}</p>
            <br></br>
            <p>Customer details:</p>
            <form onSubmit={handleOrderSubmit}>
                <label htmlFor='customer-name'> Customer name:</label>
                <input id='customer-name' type='text' placeholder='Name'/>
                <br></br>
                <label htmlFor='delivery-address'> Delivery address:</label>
                <input id='delivery-address' type='text' placeholder='Delivery address'/>
                <br></br>
                <label htmlFor='card-number'> Card number:</label>
                <input id='card-number' type='number' placeholder='0000 0000 0000 0000'/>
                <button type='submit'>Place order</button>
            </form>
        </>

    );
};

export default Checkout;