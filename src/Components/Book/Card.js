import React, { useEffect, useState } from 'react';

import Order from '../OrderDetail/Order';
import Product from '../Product/Product';
import './Card.css'
const Card = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        console.log(newCart);

        setCart(newCart);
    }

    const handleRandomCartSelection = () => {
        const newCart = [...cart];
        let randomItem = newCart[Math.floor(Math.random() * newCart.length)];
        const { name } = randomItem;
        alert(name);
    }

    // Choose Again Button Function in Order cart
    const handleClearCart = () => {

        const newCart = [];
        setCart(newCart);
    }



    return (
        <div className='shop-container  '>
            <div className="products-container col-md-12">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container  col-md-12">
                <h4 className="bg-light p-3">Selected Book</h4>

                {

                    cart.map((item) => (

                        <Order book={item}></Order>
                    ))
                }

                <button onClick={() => handleRandomCartSelection()} className="btn btn-secondary p-2 m-4 ">CHOOSE 1 FOR ME</button>

                <button onClick={() => handleClearCart()} className="btn btn-secondary p-2 m-4 ">Choose Again</button>
            </div>
        </div>

    );
};

export default Card;