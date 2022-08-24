import React from "react";
import ClassPerroComponent from "./ClassPerroComponent";


class ListaDePerros extends React.Component {
  render() {
    return (
      <div>
        <h1>Clientes caninos de Veterinaria</h1>
        <ul>
          <ClassPerroComponent nombre="Firulais" edad="11" sexo="Macho" raza="Pastor alemán" tamaño="Grande"/>
          <ClassPerroComponent nombre="Maya" edad="13" sexo="Hembra" raza="Pug" tamaño="Chico"/>
          <ClassPerroComponent nombre="Pipo" edad="5" sexo="Macho" raza="Schnauzer" tamaño="Mediano"/>
          <ClassPerroComponent nombre="Pacha" edad="2" sexo="Hembra" raza="Mestizo" tamaño="Chico"/>
        </ul>
      </div>
    );
  }
}

export default ListaDePerros;