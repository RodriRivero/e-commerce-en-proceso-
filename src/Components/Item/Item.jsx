import React from 'react';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Item({info}) {
    return (
<Link to={`/detalle/${info.id}`} className='container' >
  <Card  style={{ width: '300px' }}>
  <Card.Img variant="top" src={info.image} />
  <Card.Body >
    <Card.Title>{info.title}</Card.Title>
    <Card.Text>{info.id}</Card.Text>
    <Button variant="secondary">ver mas</Button>
  </Card.Body>
</Card>
</Link>

  );
}

