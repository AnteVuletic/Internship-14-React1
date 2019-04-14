import React from 'react';
import ItemDelete from '../Item/ItemDelete';

const BasketList = (props)=>{
    const handleDelete = (basketItem) =>{
        props.onRemoveBasket(basketItem);
    }
    return(
        <section>
            {props.basketItems.map((basketItem,index)=>{
               return <ItemDelete key={index} onDelete={handleDelete} item={basketItem}/>
            })}
        </section>
    );
}
export default BasketList;