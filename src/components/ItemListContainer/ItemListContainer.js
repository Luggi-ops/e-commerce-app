import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) =>{

    return(
        <>
            <section className="itemListContainer">
                <h1 className="greeting">{greeting}</h1>
            </section>

            <section>
                <ItemList />
            </section>
        </>
    );
}

export default ItemListContainer;