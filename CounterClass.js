import React from "react";
import "./CounterClass.css";

export class CounterClass extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    const { counter } = this.state;

    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="Counter">
        <span className="Counter-counter">{counter}</span>
        <button onClick={this.handleClick} className="Counter-button">
          Click me!
        </button>
      </div>
    );
  }
}