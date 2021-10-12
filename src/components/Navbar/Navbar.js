import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () =>{

    return(
        <>
            <nav className="nav container">
                <Link to="/">
                    <h2>e-pokecomerce</h2>
                </Link>
                <ul>    
                    <li><img src="/img/icon/user.svg" alt="user"/></li>
                    <li><img src="/img/icon/favorite.svg" alt="favorite"/></li>
                    <CartWidget itemsCounter={0}/>
                    <li><img src="/img/icon/navbar.svg" alt="nav"/></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;