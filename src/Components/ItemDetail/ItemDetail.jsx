import React,{useState} from 'react';
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

export default function ItemDetail({data}) {

    const [goCart,setGoCart]= useState(false);

    const onAdd = (quantity) =>{
        setGoCart(true);
        alert(`compraste ${quantity} unidades`);
    }

    return (
    <div className='container'>
        <div className='detail'>
            <img className='detailImage' src={data.image} alt="" />
            <div className='content'>
            <h1>{data.title}</h1>
            <h1>{data.price}</h1>
            {
                goCart?
                <Link to='/cart'>Terminar Compra</Link>:
                <h2><ItemCount initial={1} stock={5}  onAdd ={onAdd}/> </h2>
            }       
            </div>
        </div>
    </div>
    )
}
