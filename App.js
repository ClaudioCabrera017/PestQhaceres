import React, { useState } from 'react';
import './App.css';
import Caceres from './Caceres';
import Caserescaja from './Caserescaja';

function App() {
  const [Tarea,setTarea]=useState([
    {
      estado:false,
      tarea:"",
    }
  ])
  console.log ( Tarea)

  return (
    <div className="App">
      <Caceres Tarea={Tarea} setTarea={setTarea}   />
      <Caserescaja  Tarea={Tarea} setTarea={setTarea}/>
    </div>
  );
}

export default App;
