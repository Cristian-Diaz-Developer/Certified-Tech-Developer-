import './App.css';
import List from './components/List/List';

const data = ['HOLA','HOLA','HOLA','MUNDO'];

function App() {
  return (
    <div className="App">
      <List data={data}/>
    </div>
  );
}

export default App;
