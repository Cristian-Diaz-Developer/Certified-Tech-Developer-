import React, { Component } from "react";
import "./App.css";
import { Order } from "./components/Order/Order";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.cancelOrder = this.cancelOrder.bind(this);
    this.makeOrder = this.makeOrder.bind(this);
  }

  cancelOrder() {
    this.setState({ show: false });
    console.log("Cancel order");
  }
  makeOrder() {
    this.setState({ show: true });
    console.log("Make order");
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? <Order /> : " "}
        <button onClick={this.cancelOrder}>Cancel Order</button>
        <button onClick={this.makeOrder}>Make Order</button>
      </div>
    );
  }
}
