import React, {useState} from 'react';
import BasketItem from './BasketItem';

const Checkout = ({basket}) => {

    const [order, setOrder] = useState([])

    return(
        <>
            <BasketItem/> 
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