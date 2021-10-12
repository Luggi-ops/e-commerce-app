import React, {useEffect, useState} from 'react';
import './Item.css';
import AddToCart from '../AddToCart/AddToCart';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

const Item = ({stock, precio = 33000, nombre}) => {

    const [id, setId] = useState(25);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(res => res.json())
        .then(data => setId(data.id))
    }, [])



    return (
        <>
            
            <div className="itemCard">
                <div className="itemCard__content">
                    <Link to={`detalle/${nombre}`} stock={stock}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" /></Link>
                    <p>{nombre}</p>
                    <p>Precio: {precio}</p>
                    <p>Stock: {stock}</p>
                </div>
                <ItemCount stock={stock}/>
                <AddToCart />
                
            </div>
        </>
    )
}

export default Item
