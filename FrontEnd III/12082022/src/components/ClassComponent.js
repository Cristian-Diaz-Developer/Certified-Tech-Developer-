import React, { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.nombre} {this.props.estaEnLista ? "esta" : "no esta"}{" "}
          invitado a ala fiesta
        </li>
      </div>
    );
  }
}
