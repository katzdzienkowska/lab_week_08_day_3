import React, {useState} from 'react';
import ProductList from '../components/ProductList';
import Basket from '../components/Basket';

const EcommerceShop = () => {

    const [products, setProducts] = useState([
        { name: 'Banana', price: 5, stock: 2 },
        { name: 'Apple', price: 3, stock: 20 },
        { name: 'Orange', price: 4, stock: 10 },
        { name: 'Cherry', price: 7, stock: 25 },
        { name: 'Pear', price: 6, stock: 30 }
    ]);

    const [basket, setBasket] = useState([]);

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

    return(
        <>
        <h1>Fruit Shop</h1>
        {basket.length > 0 ? <h2>Basket:</h2> : null}
        <Basket basket={basket} removeProductFromBasket={removeProductFromBasket}/>
        <ProductList products={products} addProductToBasket={addProductToBasket}/>
        </>
    );
};

export default EcommerceShop;