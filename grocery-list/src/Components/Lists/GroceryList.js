import React from 'react';
import ItemAdd from '../Item/ItemAdd';
import {GROCERIES} from '../../Constants/Constants';


const GroceryList = (props)=>{
    const handleAdd = (item) =>{
        props.onAddBasket(item);
    }
    return (
        <section>
            {GROCERIES.map((grocery,index)=>{
                return <ItemAdd key={index} onAdd={handleAdd} item={grocery}/>;
            })}
        </section>
    );
}
export default GroceryList;