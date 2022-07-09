import React, {useState} from 'react';
import BasketItem from './BasketItem';

const Checkout = ({basket, checkoutTotal}) => {

    const [order, setOrder] = useState([])

    const CheckoutNodes = basket.map((product, index) => {
        return <BasketItem key={index} index={index} name={product.name} price={product.price}/>
    });

    return(
        
        <> 
            <h1>Products added:</h1>
            {CheckoutNodes}
            <p>Total: {checkoutTotal}</p>
            <form>
                <label htmlFor='customer-name'> Customer name:</label>
                <input id='customer-name' type='text' placeholder='Name'/>
                <br></br>
                <label htmlFor='delivery-address'> Delivery address:</label>
                <input id='delivery-address' type='text' placeholder='Name'/>
                <br></br>
                <label htmlFor='card-number'> Card number:</label>
                <input id='card-number' type='number' placeholder='0000 0000 0000 0000'/>
                <button type='submit'>Place order</button>
            </form>
        </>

    );
};

export default Checkout;