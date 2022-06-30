import React from 'react'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContex'
import ItemCart from '../ItemCart/ItemCart';
import {Row} from 'react-bootstrap';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

function Cart() {
const{ cart, totalPrice } = useCartContext();

const order = {
  buyer:{
    name:'Rodrigo',
    email:'Rodrigo@gmail.com',
    phone:'1534659856',
    adress:'12 de octubre 251'
  },
  items: cart.map(product => ({id:product.id,title:product.title,price:product.price,quantity:product.quantity})),
}

const handleClick = () =>{

const db = getFirestore();
const ordersColletion = collection(db, 'orders');
addDoc(ordersColletion, order)
.then(({id}) => console.log(id))
}



if (cart.length === 0) {
  return(
    <Row className='detailView justify-content-center'>
    <div className='col-xl- d-flex align-items-'>
    <p>No hay productos en el carrito</p> 
    <div className='col-xl-9'>
    <Link  to='/' > <button className='btn btn-primary'>Comprar Productos</button></Link>
    </div>
    </div>
    </Row>
  );
}

  return (
    <Row className='detailView justify-content-center'>
      <div className='col-xl-5'>
    {
      cart.map(product => <ItemCart key={product.id} product= {product} />)
    }
    <p> Total:{totalPrice()}</p>
    <button onClick={handleClick} > Emitir Compra </button>
    </div>
    </Row>
  )
}

export default Cart
