import { Component } from "react";

export default class C1 extends Component {
  constructor() {
    super();
    this.state = {
      role: "Student",
    };
  }

  handleClick = () => {
    this.setState({ role: "Developer", name: "", bool: true });
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSignal = () => {
    this.setState({
      bool: !this.state.bool,
    });
  };

  render() {
    return (
      <div className="C1">
        <h1>States and Props</h1>
        <h1>Props value is: {this.props.name}</h1>
        <h1>States value is: {this.state.role}</h1>
        <button onClick={this.handleClick}>changeState</button>
        <input placeholder="Enter name" onChange={this.handleChange} />
        <p>My name is {this.state.name}</p>
        <button onClick={this.handleSignal}>changeSignal</button>
        {this.state.bool ? <p>show</p> : <p>don't show</p>}
      </div>
    );
  }
}
