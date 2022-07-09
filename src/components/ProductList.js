import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products, addProductToBasket}) => {

    const ProductNodes = products.map((product, index) => {
        return <ProductItem key={index} index={index} name={product.name} price={product.price} stock={product.stock} image={product.image} addProductToBasket={addProductToBasket}/>
    });

    return(
        <>
            <h2>Ducks:</h2>
            <ul>
            {ProductNodes}
            </ul>
        </>
    );
};

export default ProductList;