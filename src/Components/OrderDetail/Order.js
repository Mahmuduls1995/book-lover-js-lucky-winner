import React from 'react';
import './Order.css'
const Order = (props) => {
    const {name,img,price}=props.book
    return (
        <div>
            <div className=" mt-3 d-flex order  ">
            <img width="40px" className="rounded-circle shadow" src={img} alt="" />
          
            </div>
            
        </div>
    );
};

export default Order;