import React from 'react';
import './ItemDetail.css'

export default function ItemDetail({data}) {
    return (
    <div className='container'>
        <div className='detail'>
            <img className='detailImage' src={data.image} alt="" />
            <div className='content'>
            <h1>{data.title}</h1>
            <h1>{data.price}</h1>
            </div>
        </div>
    </div>
    )
}
