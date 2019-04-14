import React from 'react';
import './ItemAdd.css';

export default (props) =>{
    return (
    <article className="item--add" onClick={()=> props.onAdd(props.item)}>
        <button className="item__add">+</button>
        <span>{props.item}</span>
    </article>);
}