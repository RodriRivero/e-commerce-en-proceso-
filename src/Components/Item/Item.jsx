import React from 'react';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default function Item({info}) {

  
    return (

 <div className="link">
<Link to={`/detalle/${info.id}`}>
  <div className="counter link__item" style={{ width: "15rem" }}>
    <div className="counter__content">
      <h5 className="card-title">{info.title}</h5>
      <img
        src={info.image}
        className="card-img-top"
        alt="Imagen de Producto"
      />
      <p>{info.description}</p>
      <h6 className='precio'> Unidad ${info.price}</h6>
    </div>
  </div>
</Link>
</div> 
  );
}

