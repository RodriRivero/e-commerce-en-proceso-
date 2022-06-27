import React,{useState} from 'react';
import {useCartContext} from '../../Context/CartContex';
import ItemCount from "../ItemCount/ItemCount";
import { Link, } from 'react-router-dom';
import {Row} from 'react-bootstrap';
import toast, { Toaster } from "react-hot-toast";

export default function ItemDetail({data}) {

    const [goCart,setGoCart]= useState(false);
    const {addItem} = useCartContext();

    const onAdd = (quantity) =>{
        setGoCart(true);
        addItem(data,quantity);
        toast.success(`Agregaste ${quantity} unidades`,{
            position:"top-right",
            duration: 4000,
            style: {
                borderRadius: '7px',
                background: '  #e5e8e8 ',
                color: 'black',
                
            },
        } );
    }

    return (
    <Row className='detailView justify-content-center'>
        <div className='col-xl-8 d-flex align-items-center'>
            <img className='col-xl-6' src={data.image} alt="" />
            <div >
            <h1>{data.title}</h1>
            <h1> Precio: ${data.price}</h1>
            {
                goCart?
                <Link to='/cart'> <button className='btn btn-primary'>Ver Carrito</button> </Link>:
                <h2><ItemCount initial={1} stock={5}  onAdd ={onAdd}/> </h2>
            }     
            <Toaster   />  
            </div>
        </div>
    </Row>
    )
}
