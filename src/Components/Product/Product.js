import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({product, handleAddToCart}) => {
    const { name, img, price } = product;
    return (

        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h6>Price: ${price}</h6>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;