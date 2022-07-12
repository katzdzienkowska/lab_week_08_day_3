import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Basket from '../components/Basket';
import Checkout from '../components/Checkout';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Error from '../components/Error';

const EcommerceShop = () => {

    const [products, setProducts] = useState([
        { name: 'Namaste Rubber Duck', price: 6, stock: 2, image: '../images/Yoga-rubber-duck-Amsterdam-Duck-Store-400x400.jpeg'},
        { name: 'Knitting Rubber Duck', price: 9, stock: 20, image: '../images/Knitting-Rubber-Duck-front-Amsterdam-Duck-Store-400x400.jpeg'},
        { name: 'Photographer Rubber Duck', price: 10, stock: 10, image: '../images/Photographer-rubber-duck-front-Amsterdam-Duck-Store-400x400.jpeg'},
        { name: 'Ducktrix Rubber Duck', price: 14, stock: 25, image: '../images/Ducktrix-rubber-duck-front-Amsterdam-Duck-Store-1-400x400.jpeg'},
        { name: 'Unicorn Pink Rubber Duck', price: 8, stock: 30, image: '../images/unicorn-rubber-duck-front-400x400.jpeg'}
    ]);

    const [basket, setBasket] = useState([]);
    const [discount, setDiscount] = useState('');
    const [basketTotal, setBasketTotal] = useState(0);
    const [checkoutTotal, setCheckoutTotal] = useState(0);

    const addProductToBasket = (index) => {
        const productToAdd = products[index];
        const updatedBasket = [...basket, productToAdd];
        setBasket(updatedBasket);
        const updatedProducts = [...products];
        updatedProducts[index].stock --;
        setProducts(updatedProducts)
    };

    const removeProductFromBasket = (index) => {
        const productToRemove = basket[index];
        const updatedBasket = [...basket];
        updatedBasket.splice(index, 1);
        setBasket(updatedBasket);
        const matchedIndex = products.findIndex((product) => {
            return product.name === productToRemove.name
        });
        const updatedProducts = [...products];
        updatedProducts[matchedIndex].stock ++;
        setProducts(updatedProducts)
    };

    const calculateTotal = () => {
        const currentTotal = basket.reduce((runningTotal, product) => {
            return runningTotal + product.price;
        }, 0);
        setBasketTotal(currentTotal);
        setCheckoutTotal(currentTotal);
    };

    useEffect(calculateTotal);

    const onDiscountSubmit = () => {
        if (discount === 'happy10') {
            return (basketTotal * 0.9)
        } else {
            return basketTotal;
        };
    };

    const addDiscount = (submittedDiscount) => {
        setDiscount(submittedDiscount)
    };

    const submitOrder = () => {
        const emptyBasket = [];
        setBasket(emptyBasket);
      };

    return(
        <>
        <Router>
        <Header />
        <NavBar />
            <Routes>
                <Route path='/' element={<ProductList products={products} addProductToBasket={addProductToBasket}/>} />
                <Route path='/basket' element={<Basket basket={basket} removeProductFromBasket={removeProductFromBasket} basketTotal={basketTotal} onDiscountSubmit={onDiscountSubmit} addDiscount={addDiscount}/>} />
                <Route path='/checkout' element={<Checkout basket={basket} checkoutTotal={checkoutTotal} removeProductFromBasket={removeProductFromBasket} onDiscountSubmit={onDiscountSubmit} submitOrder={submitOrder}/>} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
        </>
    );
};

export default EcommerceShop;
