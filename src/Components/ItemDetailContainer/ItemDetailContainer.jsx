import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

const ficha = [
    {id:1, image:"http://www.puroescabio.com.ar/web/image/product.template/49631/image_256", category:"conalcohol" ,title:"Fernet", price:" $1000 ARS"},
    {id:2, image:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080167_f.jpg",category:"sinalcohol" ,title:"Coca", price:" $ 220 ARS"},
    {id:3, image:"https://grupobonprix.com.ar/wp/wp-content/uploads/2020/05/smirnoff-comun.png" , category:"conalcohol" ,title:"Vodka", price:" $820 ARS"},
    {id:4, image:"https://mauimarket.com.ar/wp-content/uploads/2020/07/baggio-naranja-1-lt-021-d0c6ef4aad80b2f5b615860380310402-640-0.jpg",category:"sinalcohol" ,title:"Jugo", price:"$ 190 ARS"},
];

export default function ItemDetailContainer() {

    const[data,setData] = useState({});

    const {detalleId}= useParams();

    useEffect(()=> {
        const getData= new Promise(resolve => {
            setTimeout(()=>{
                resolve(ficha);
            },2000);
        });
        getData.then(res=>setData(res.find(ficha=>ficha.id===parseInt(detalleId))));
    },);

    return (
 <ItemDetail data={data} />
    )
}
