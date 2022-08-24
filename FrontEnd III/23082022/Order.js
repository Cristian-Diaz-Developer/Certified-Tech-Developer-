import React, { Component } from "react";

export class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
    };
  }

  // Preparamos la pizza
  componentDidMount() {
    setTimeout(() => {
      this.setState({ item: "Pizza" });
    }, 2000);
  }

  // Actualizar
  componentDidUpdate() {
    console.log("Pizza updated");
  }

  //Cancelamos pizza
  componentWillUnmount() {
    console.log("Pizza canceled");
  }

  render() {
    return (
      <div>
        <h1>Tu pedido: {this.state.item}</h1>
      </div>
    );
  }
}
