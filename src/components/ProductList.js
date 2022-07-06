import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products, addProductToBasket}) => {

    const ProductNodes = products.map((product, index) => {
        return <ProductItem key={index} index={index} name={product.name} price={product.price} stock={product.stock} addProductToBasket={addProductToBasket}/>
    });

    return(
        <>
            <h2>Fruits:</h2>
            {ProductNodes}
        </>
    );
};

export default ProductList;