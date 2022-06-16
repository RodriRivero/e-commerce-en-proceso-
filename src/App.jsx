import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import './App.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart/Cart";
import {BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return(
    <> 
    <BrowserRouter>
      <NavBar/>  
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
