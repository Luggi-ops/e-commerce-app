import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import './ItemCount.css';

const ItemCount = ({stock = 10}) => {


    const [counterItem, setCounterItem] = useState(0);

    const handleIncrement = () =>{
        if(counterItem < stock){
            setCounterItem(counterItem+1);
        }
    }

    const handleDecrement = () =>{
        if(counterItem > 0 ){
            setCounterItem(counterItem-1);
        }
    }

    return (
        <>
            
            <div className="df-center df-justify-between itemCount">
                <FontAwesomeIcon icon={faMinus} className="itemCount__icon" onClick={handleDecrement}/>
                <p className="itemCount__value">{counterItem}</p>
                <FontAwesomeIcon icon={faPlus} className="itemCount__icon" onClick={handleIncrement}/>
            </div>
        </>
    )
}

export default ItemCount;
