import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import AddToCart from '../AddToCart/AddToCart';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({stock}) => {
    const [datos, setDatos] = useState({id: 1, name:''});

    const {pokemon} = useParams();
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(data => setDatos(data))
    }, [])

    const {id, name, base_experience, height} = datos;

    return (
        <section className="ItemDetail">
            <div className="ItemDetail__img">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="..." />
            </div>
            <div className="ItemDetail__text">
                <h1>{name}</h1>
                <p>Experiencia: {base_experience}</p>
                <p>Altura: {height}</p>
                <p>Stock: {stock}</p>
                <ItemCount stock={stock}/>
                <AddToCart />
            </div>
        </section>
    )
}

export default ItemDetail
