import React, { Component } from "react";

import "./style.scss";

export default class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: props.steps,
      currentStep: props.currentStep,
      totalSteps: props.steps.length
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(this.state.steps);
    this.state = {
      steps: newProps.steps,
      currentStep: newProps.currentStep,
      totalSteps: newProps.steps.length
    };
  }

  stepChecked() {
    return (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5Z"
          fill="white"
          stroke="#002EFF"
          stroke-width="2"
          stroke-linejoin="bevel"
        />
        <path
          d="M20.9164 10.2179C21.3557 9.77852 21.3557 9.06621 20.9164 8.62687C20.477 8.18753 19.7647 8.18753 19.3254 8.62687L10.834 17.1183L7.61929 13.9036C7.17995 13.4643 6.46764 13.4643 6.0283 13.9036C5.58896 14.3429 5.58896 15.0553 6.0283 15.4946L10.0058 19.4721C10.0619 19.5282 10.1225 19.5772 10.1865 19.619C10.6259 19.9334 11.2409 19.8933 11.6356 19.4986L20.9164 10.2179Z"
          fill="#002EFF"
        />
      </svg>
    );
  }

  stepUnchecked() {
    return (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5Z"
          fill="white"
          stroke="#CCCCCC"
          stroke-width="2"
          stroke-linejoin="bevel"
        />
      </svg>
    );
  }

  stepActive() {
    return (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5Z"
          fill="#002EFF"
          stroke="#002EFF"
          stroke-width="2"
          stroke-linejoin="bevel"
        />
      </svg>
    );
  }

  render() {
    const { steps, currentStep, totalSteps } = this.state;
    return (
      <div className="stepper-wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step-wrapper">
              {index + 1 < currentStep && this.stepChecked()}
              {index + 1 == currentStep && this.stepActive()}
              {index + 1 > currentStep && this.stepUnchecked()}
              <div
                className={`title ${index + 1 <= currentStep ? "active" : ""}`}
              >
                {step.title}
              </div>
            </div>
            {(index + 1 < totalSteps || totalSteps == 1) && (
              <div
                className={`${
                  index + 1 < currentStep ? "line " : "line-dashed "
                } ${
                  index + 1 === currentStep ||
                  (index + 1 === totalSteps - 1 && currentStep === totalSteps)
                    ? "active"
                    : ""
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
}
