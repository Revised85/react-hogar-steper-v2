import React, { Component } from "react";
import ReactDOM from "react-dom";
import Stepper from "./stepper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        { step: 1, title: "Datos" },
        { step: 2, title: "Carrito" },
        { step: 3, title: "Despacho" },
        { step: 4, title: "Confirmación" }
      ],
      currentStep: 1,
      totalSteps: 4
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(number) {
    this.setState({
      currentStep: this.state.currentStep + number
    });
  }

  render() {
    const { steps, currentStep, totalSteps } = this.state;
    return (
      <div>
        <Stepper steps={steps} currentStep={currentStep} />
        <button
          className="bottom-left"
          onClick={() => this.handleClick(-1)}
          disabled={currentStep <= 1}
        >
          Prev
        </button>
        <button
          className="bottom-right"
          onClick={() => this.handleClick(1)}
          disabled={currentStep >= totalSteps}
        >
          Next
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
