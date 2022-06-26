import React from 'react'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContex'
import ItemCart from '../ItemCart/ItemCart';

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
    <>
    {
      cart.map(product => <ItemCart key={product.id} product= {product} />)
    }
    <p> Total:{totalPrice()}</p>
    </>
  )
}

export default Cart
