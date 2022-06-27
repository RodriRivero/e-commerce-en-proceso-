import React ,{ useState,useEffect }from "react";
import './ItemListContainer.css';
import ItemList from "../ItemLIst/ItemList";
import Title from "../Title/Title";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs,query, where } from 'firebase/firestore';
import {BeatLoader} from 'react-spinners';
import './pineer.css';




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
        <div className="spinnerpadre">
            <Title />
            {Object.keys(data).length < 1 ?
                <div className="spinnerhijo">
                <BeatLoader  color= "blue" />
                </div>: 
            <ItemList   data={data}/>}
        </div>
        </>
    );
}
export default ItemListContainer;