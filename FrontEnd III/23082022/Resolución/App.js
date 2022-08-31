import { useState } from 'react';
import './App.css';
import ClassDidMount from './Components/Clase 10/ClassDidMount'
import FunctionState from './Components/Clase 8/FunctionState'
function App() {

  const [ cambio, setCambio ] = useState(false)

  return (
    <div className="App">

      {cambio === true ? <FunctionState /> :  <ClassDidMount />}
     
      <button onClick={() => setCambio(!cambio)} >Cambio</button>
    </div>
  );
}

export default App;
