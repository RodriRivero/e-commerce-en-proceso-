import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import './App.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


function App() {
  return(
    <> 
      <NavBar/>  
      <ItemListContainer  text='se muestra en app x props de itemlist   y lo toma  title'/>
    </>
  );
}

export default App;
