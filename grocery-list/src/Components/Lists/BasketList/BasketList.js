import React from 'react';
import ItemDelete from '../../Item/ItemDelete/ItemDelete';

import './BasketList.css';

const BasketList = (props)=>{
    const handleDelete = (basketItem) =>{
        props.onRemoveBasket(basketItem);
    }
    const handleCrossed = (basketItem) =>{
        props.onCrossedItem(basketItem);
    }
    return(
        <section className="basket">
            <div className="basket__header">
                <h1 className="basket__title">Basket</h1>
                <button onClick={()=> props.onClear()}>Clear</button>
            </div>
            {props.basketItems.map((basketItem,index)=>{
               return <ItemDelete key={index} onDelete={handleDelete} onCrossed={handleCrossed} item={basketItem}/>
            })}
        </section>
    );
}
export default BasketList;