import React ,{ useState,useEffect }from "react";

import ItemList from "../ItemLIst/ItemList";
import Title from "../Title/Title";
import { useParams } from "react-router-dom";
 
const drink = [

    {id:1, image:"http://www.puroescabio.com.ar/web/image/product.template/49631/image_256", category:"conalcohol" ,title:"Fernet"},
    {id:2, image:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080167_f.jpg",category:"sinalcohol" ,title:"Coca"},
    {id:3, image:"https://grupobonprix.com.ar/wp/wp-content/uploads/2020/05/smirnoff-comun.png" , category:"conalcohol" ,title:"Vodka"},
    {id:4, image:"https://mauimarket.com.ar/wp-content/uploads/2020/07/baggio-naranja-1-lt-021-d0c6ef4aad80b2f5b615860380310402-640-0.jpg",category:"sinalcohol" ,title:"Jugo"},
];


export const ItemListContainer = ()=>{

    const [data,setData] = useState([]);

    const{categoriaId} = useParams();

    useEffect(()=>{
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(drink);
            },1000);
        });

        if (categoriaId){
            getData.then(res => setData(res.filter(drink => drink.category === categoriaId)));
        }else{
            getData.then(res=> setData(res));
        }
    
    },[categoriaId])

    
    return(
        <>
        <Title /> 
        <ItemList   data={data}/>
        </>
    );
}
export default ItemListContainer;