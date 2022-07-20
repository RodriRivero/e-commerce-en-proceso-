import React from 'react'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContex'
import ItemCart from '../ItemCart/ItemCart';
import {Row} from 'react-bootstrap';
import './Cart.css';


function Cart() {
const{ cart } = useCartContext();



if (cart.length === 0) {
  return(
    <Row className='detailView justify-content-center'>
    <p className='aviso'>No hay productos en el carrito</p> 
    <div className='col-xl- d-flex align-items-center'>
    <div className='vacio'>
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
    <Link to='/checkout'> <button className='btn btn-success'>Emitir Compra</button> </Link>
    </div>
    </Row>
  )
}

export default Cart
