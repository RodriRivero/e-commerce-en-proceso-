import React, {useContext} from 'react';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { CartContex } from '../../Context/CartContex';

export default function Item({info}) {

  const nombre = useContext(CartContex);
  
    return (
      <div style={{ display: 'flex' }}>
<Link to={`/detalle/${info.id}`} className='container' >
  <Card  style={{ width: '270px' }}>
  <Card.Img variant="top" src={info.image} />
  <Card.Body >
    <Card.Title>{info.title}</Card.Title>
    <Card.Text> $ {info.price}</Card.Text>
    <Button variant="secondary">ver mas</Button>
  </Card.Body>
</Card>
</Link>
</div>

  );
}

