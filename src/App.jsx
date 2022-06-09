import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import './App.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return(
    <> 
      <NavBar/>  
      
      <ItemListContainer />
      <ItemDetailContainer/>



    </>
  );
}

export default App;
