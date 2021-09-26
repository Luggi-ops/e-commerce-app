import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) =>{

    return(
        <>
            <section className="itemListContainer">
                <h1 className="greeting">{greeting}</h1>
            </section>
        </>
    );
}

export default ItemListContainer;