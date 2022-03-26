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
          
        </div>

    );
};

export default Card;