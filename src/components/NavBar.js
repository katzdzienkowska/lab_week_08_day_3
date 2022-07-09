import React from "react";
import {Link} from "react-router-dom"


const NavBar = () => {

    return(
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/basket">Basket</Link>
        </li>
        <li>
            <Link to="/checkout">Checkout</Link>
        </li>
    </ul> 
    );
};

export default NavBar;