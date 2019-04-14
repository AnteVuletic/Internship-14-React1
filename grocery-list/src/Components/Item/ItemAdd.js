import React from 'react';

export default (props) =>{
    return <article><span onClick={()=> props.onAdd(props.item)}>+</span><span>{props.item}</span></article>
}