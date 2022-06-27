import './ItemCount.css';
import React,{useState} from 'react';


export const ItemCount = ({initial, stock, onAdd}) => {

    const[count,setCount]= useState(initial);

    const decrease = ()=>{
        setCount(count -1)
    }
    const increase = ()=>{
        setCount(count +1)
    }


    return(
    <div className='d-flex col-xl- justify-content-evenly mb-3'>
        <button disabled= {count<=1} onClick={decrease} className='btn btn-danger'>-</button>

        <span className='botoncontador'>{count}</span>
        
        <button disabled= {count>=5}  onClick={increase} className='btn btn-success'>+</button>
        
            <button className='btn btn-primary'  disabled ={stock<=0}  onClick= {()=> onAdd(count)}><span >Agregar al carrito</span></button>
        
    </div>
    );
}



export default ItemCount;