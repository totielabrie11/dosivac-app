import { NavBar } from './components/NavBar/NavBar.js'
import './App.scss'
import './components/ItemListContainer/ItemListContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import { ClickTraker } from './components/ClickTracker/ClickTracker.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [montar, setMontar] = useState(true)
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ montar", montar)


  return (

    <>
      <NavBar/>
      <ItemListContainer saludo={"Hola consumidores"} propuesta={"Encontrá los mejores precios"} className="container"/>

      <button className="btn btn-dark d-flex container w-25 mb-2" onClick={()=>{setMontar(!montar)}}>montar/desmontar Contador</button>
    
      {montar && <ClickTraker/>} {/* renderizado condicional */}
    </>

  );
}

export default App;
