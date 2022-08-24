import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {

  constructor(){
    super();
    this.state={ colors : ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  }
    this.shuffle= this.shuffle.bind(this);

  }
  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */


  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */
 shuffle(){
  const randomArray = this.state.colors.sort((a,b)=> 0.3 - Math.random());
  //Setear(cambiar) nuevo estado
  this.setState({colors : randomArray})
 }

  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.state.colors.map((color)=>(
            <div key={color} className={color}> {color} </div>
          ))}
        </div>
        <Button fn={this.shuffle} />
      </div>

    )
  }
}
