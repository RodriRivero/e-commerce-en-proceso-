import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"; 
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import{BeatLoader} from 'react-spinners';


export default function ItemDetailContainer() {

    const[data,setData] = useState({});

    const {detalleId}= useParams();

    useEffect(()=> {
        const querydb = getFirestore();
        const queryDoc = doc(querydb ,'items',detalleId);
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    },[detalleId]);


    return (
        <>
        <div className="spinnerpadre">
        {Object.keys(data).length < 1 ?
        <div className="spinnerhijo">
        <BeatLoader    color= "blue" />
        </div>:
        <ItemDetail data={data} />}
        </div>
        </>
    )
}
