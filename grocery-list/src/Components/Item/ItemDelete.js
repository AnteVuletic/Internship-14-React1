import React from 'react';

export default (props) =>{
    return <article onClick={() => props.onDelete(props.item)}><span>-</span><span>{props.item.count}</span><span>{props.item.item}</span></article>
}