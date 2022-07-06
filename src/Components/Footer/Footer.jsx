import './Footer.css';
import React from 'react'

function Footer() {
  return (
    <div  className="Footer" >
      <ul className = "social">
          <li> <a target="blank" href="https://www.instagram.com/?hl=es-la"> <img src="https://icongr.am/fontawesome/instagram.svg?size=30&color=ffffff"alt=""/></a></li>
          <li> <a target="blank" href="https://es-la.facebook.com/"> <img src="https://icongr.am/fontawesome/facebook.svg?size=30&color=ffffff" alt=""/></a></li>
          <li> <a target="blank" href="https://twitter.com/?lang=es"> <img src="https://icongr.am/fontawesome/twitter.svg?size=30&color=ffffff" alt=""/></a></li>
          <li> <a target="blank" href="https://www.whatsapp.com/?lang=es"> <img src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=ffffff" alt=""/></a></li>
          <li> <a target="blank" href="https://www.youtube.com/"> <img src="https://icongr.am/fontawesome/youtube.svg?size=30&color=ffffff" alt=""/></a></li>
      </ul>
      <p><small>Todos Los Derechos Reservados © 2022 Proyecto R.R </small></p>
    </div>
  )
}

export default Footer;


