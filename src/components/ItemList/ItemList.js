import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        getData();
    }, [])

    const getData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=30"')
        .then((res) => res.json())
        .then((data) => setData(data.results))
    }

    return (
        <>
            <div className="ItemList container">
                {data.map(({name}) =>{
                    return <Item nombre={name} stock={10}/>
                })}
            </div>
        </>
    )
}

export default ItemList
