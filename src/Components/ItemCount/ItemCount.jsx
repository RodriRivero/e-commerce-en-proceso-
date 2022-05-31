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
    <div className='counter'>
        <button disabled= {count<=1} onClick={decrease} className='button'>-</button>
        <span>{count}</span>
        <button disabled= {count>=5}  onClick={increase} className='button'>+</button>
        <div>
            <button   disabled ={stock<=0}  onClick= {()=> onAdd(count)}><span className='buttonAdd'>Agregar al carrito</span></button>
        </div>
    </div>
    );
}



export default ItemCount;