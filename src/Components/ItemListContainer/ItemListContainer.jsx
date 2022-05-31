import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Title from "../Title/Title";


export const ItemListContainer = ({text})=>{

    const onAdd = (quantity) =>{
        alert(`compraste ${quantity} unidades`);
    }
    return(
        <>
        <Title greeting= {text}/> 
        <h1 className="titulo">Contador carrito</h1> 
        <h2><ItemCount initial={1} stock={5}  onAdd ={onAdd}/> </h2>
        </>
    );
}
export default ItemListContainer;