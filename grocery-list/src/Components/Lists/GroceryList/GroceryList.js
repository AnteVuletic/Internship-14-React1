import React from 'react';
import ItemAdd from '../../Item/ItemAdd/ItemAdd';
import {GROCERIES} from '../../../Constants/Constants';

import './GroceryList.css';

const GroceryList = (props)=>{
    const handleAdd = (item) =>{
        props.onAddBasket(item);
    }
    return (
        <section className="groceries">
            <h1 className="groceries__title">Groceries</h1>
            {GROCERIES.map((grocery,index)=>{
                return <ItemAdd key={index} onAdd={handleAdd} item={grocery}/>;
            })}
        </section>
    );
}
export default GroceryList;