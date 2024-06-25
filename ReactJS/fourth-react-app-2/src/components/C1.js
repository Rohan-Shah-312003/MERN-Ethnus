import React, { Component } from "react";
import Axios from "axios";

export default class C1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((msg) => {
        console.log(msg.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>C1</h1>
      </div>
    );
  }
}
