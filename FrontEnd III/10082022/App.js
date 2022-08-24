import './App.css';
import { List } from './components/List/List';

function App() {
const listAnimals = [
  {
  name : 'Firulais',
  age: 11,
  sex:'Macho',
  breed:'Pastor Aleman',
  size:'Grande' 
    
  },
  {
  name : 'Maya',
  age: 13,
  sex:'Hembra',
  breed:'Pug',
  size:'Chico' 
      
  },
  {
  name : 'Pipo',
  age: 5,
  sex:'Macho',
  breed:'Schnauzer',
  size:'Mediano' 
     
  },
  {
  name : 'Pacha',
  age: 2,
  sex:'Hembra',
  breed:'Mestizo',
  size:'Chico' 
  }
 ]

  return (
    <div className="App">
      <h1>Clientes caninos de Veterinaria</h1>
      <List listAnimals={listAnimals}/>
    </div>
  );
}

export default App;
