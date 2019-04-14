import React from 'react';
import './ItemDelete.css';

export default (props) =>{
    return (
    <article className="item--delete">
        <button className="item__delete" onClick={() => props.onDelete(props.item)}>-</button>
        <span>{props.item.count} </span>
        <span className={props.item.isCrossed ? 'crossed' : ''} onClick={() => props.onCrossed(props.item)}>{props.item.item}</span>
    </article>);
}