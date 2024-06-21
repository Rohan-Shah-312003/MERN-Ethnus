import { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <h1>Nav is made for {this.props.team}</h1>
      </div>
    );
  }
}
