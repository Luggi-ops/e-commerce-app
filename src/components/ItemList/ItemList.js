import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';
import './ItemList.css';


const ItemList = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        getData();
    }, [])

    const getData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=25&offset=25"')
        .then((res) => res.json())
        .then((data) => setData(data.results))
    }

    console.log(data)

    return (
        <>
            <div className="ItemList container">
                {data.map(({name}) =>{
                    return <Item nombre={name} stock={Math.round(Math.random()*10)}/>
                })}
            </div>
        </>
    )
}

export default ItemList
