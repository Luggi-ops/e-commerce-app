import React from 'react';
import './CartWidget.css';

const CartWidget = ({itemsCounter = 0}) =>{

    return(

        <>
            <li className="CartWidget"><img src="/img/icon/cart.svg" alt="cart"/><span className="itemsCounter">{itemsCounter}</span></li>
        </>
    );
}

export default CartWidget;