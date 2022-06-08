import React ,{ useState,useEffect }from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemLIst/ItemList";
import Title from "../Title/Title";
 
const drink = [

    {id:1, image:"http://www.puroescabio.com.ar/web/image/product.template/49631/image_256", title:"Fernet"},
    {id:2, image:"http://www.puroescabio.com.ar/web/image/product.template/49631/image_256", title:"Coca"},
    {id:3, image:"http://www.puroescabio.com.ar/web/image/product.template/49631/image_256" ,title:"Vodka"},
    {id:4, image:"http://www.puroescabio.com.ar/web/image/product.template/49631/image_256", title:"Jugo"},
];


export const ItemListContainer = ()=>{

    const [data,setData] = useState([]);

    useEffect(()=>{
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(drink);
            },2000);
        });
    getData.then(res=> setData(res));
    
    },[]);

    const onAdd = (quantity) =>{
        alert(`compraste ${quantity} unidades`);
    }
    return(
        <>
        <Title /> 
        <h1 className="titulo">Contador carrito</h1> 
        <h2><ItemCount initial={1} stock={5}  onAdd ={onAdd}/> </h2>
        <ItemList   data={data}/>
        </>
    );
}
export default ItemListContainer;