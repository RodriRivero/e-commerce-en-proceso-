import React from 'react'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContex'
import ItemCart from '../ItemCart/ItemCart';
import {Row} from 'react-bootstrap';

function Cart() {
const{ cart, totalPrice } = useCartContext();

if (cart.length === 0) {
  return(
    <>
    <p>No hay productos en el carrito</p>
    <Link  to='/' >Comprar Productos</Link>
    </>
  );
}

  return (
    <Row className='detailView justify-content-center'>
      <div className='col-xl-5'>
    {
      cart.map(product => <ItemCart key={product.id} product= {product} />)
    }
    <p> Total:{totalPrice()}</p>
    </div>
    </Row>
  )
}

export default Cart
