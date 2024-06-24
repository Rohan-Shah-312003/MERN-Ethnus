import { Component } from "react";
import C4 from "./C4";

export default class C3 extends Component {
  constructor() {
    super();
    console.log("constructor C3");
    this.state = {
      name: "C3",
      toggle: true,
    };
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps C3");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount C3");
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate C3");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate C3");
  }
  render() {
    console.log("render C3");
    return (
      <div>
        <h1>Life Cycle Methods</h1>
        <p>{this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: "Rohan" });
          }}>
          Update
        </button>
        {this.state.toggle ? <C4 /> : null}
        <button onClick={() => this.setState({ toggle: false })}>
          Unmount
        </button>
      </div>
    );
  }
}
