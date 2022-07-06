
import React from 'react'
import { useState } from 'react'
import './Checkout.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {useCartContext} from '../Context/CartContex';

export default function Checkout() {

    const{ cart, totalPrice } = useCartContext();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cel, setCel] = useState('');
    const [idcompra, setIdCompra] = useState('');

    

    function handleClick(){
    const order = {
            buyer:{name,email,cel},
            items: cart.map(product => ({id:product.id,title:product.title,price:product.price,quantity:product.quantity})),
            
        }
        const db = getFirestore();
        const ordersColletion = collection(db, 'orders');

        addDoc(ordersColletion, order,idcompra)
        .then(({id}) => setIdCompra (id));
        
        if (handleClick)
        {

        }
}

return (

    <form  className='formulario'>
    <div>
        <label htmlFor="nombre">nombre</label>
        <input onChange={(e) => setName(e.target.value)} type="text"  id='nombre' name='nombre' placeholder='ingrese su nombre'/>
    </div>
    <div>
        <label htmlFor="correo">email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text"  id='correo' name='correo' placeholder='ingrese su email'/>
    </div>
    <div>
        <label htmlFor="cel">telefono</label>
        <input  onChange={(e) => setCel(e.target.value)}type="number"  id='cel' name='cel' placeholder='ingrese su celular'/>
    </div>
    <button onClick={()=>handleClick()} type='submit'>Realizar compra</button>
    <p>Orden de compra:{idcompra}</p>
</form>

);
}

