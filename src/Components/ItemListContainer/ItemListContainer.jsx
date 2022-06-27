import React ,{ useState,useEffect }from "react";
import './ItemListContainer.css';
import ItemList from "../ItemLIst/ItemList";
import Title from "../Title/Title";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs,query, where } from 'firebase/firestore';




export const ItemListContainer = ()=>{

    const [data,setData] = useState([]);

    const{categoriaId} = useParams();

    useEffect(()=>{

        const querydb= getFirestore();
        const queryCollection = collection(querydb,'items');
        if (categoriaId){
            const queryFilter =query(queryCollection,where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        } else{
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
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