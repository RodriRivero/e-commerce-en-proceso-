import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ficha = {
    id:1, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4mg3iHPtQ8P3BsKhwb59oufAVXhro2vT5Q&usqp=CAU", title:"Detalle del Fernet", stock:"3 unidades" , precio:"1500 pesos"}

export default function ItemDetailContainer() {
    const[data,setData] = useState({});

    useEffect(()=> {
        const getData= new Promise(resolve => {
            setTimeout(()=>{
                resolve(ficha);
            },5000);
        });
        getData.then(res=>setData(res));
    },[])
    return (
 <ItemDetail data={data} />
    )
}
