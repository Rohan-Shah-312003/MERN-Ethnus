import { Component } from "react";
export default class C4 extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount C4");
  }
  render() {
    return (
      <div className="C4">
        <h1>C4 Component</h1>
        <p>Unmount</p>
      </div>
    );
  }
}
