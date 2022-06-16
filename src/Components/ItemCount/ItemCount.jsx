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
    <div className='contador'>
        <button disabled= {count<=1} onClick={decrease} className='botonrestar'>-</button>

        <span className='botoncontador'>{count}</span>
        
        <button disabled= {count>=5}  onClick={increase} className='botonsumar'>+</button>
        
            <button className='buttonAdd'  disabled ={stock<=0}  onClick= {()=> onAdd(count)}><span >Agregar al carrito</span></button>
        
    </div>
    );
}



export default ItemCount;