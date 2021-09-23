import React from 'react';
import './Navbar.css';

const Navbar = () =>{

    return(
        <>
            <nav className="nav container">
                <h2>Books de Fotos</h2>
                <ul>    
                    <li><img src="/img/icon/user.svg" alt="user"/></li>
                    <li><img src="/img/icon/favorite.svg" alt="favorite"/></li>
                    <li><img src="/img/icon/cart.svg" alt="cart"/></li>
                    <li><img src="/img/icon/navbar.svg" alt="nav"/></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;