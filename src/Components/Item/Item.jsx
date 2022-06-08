import React from 'react';
import './Item.css';

export default function Item({info}) {
    return (
<a href="'#'" className='drink'>
    <img  src={info.image} alt="" />
       <p>{info.title}</p> 
       <p>{info.id}</p> 
</a>
  );
}

