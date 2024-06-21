import React from "react";
import Section from "./Section";

export default class Main extends React.Component {
  render() {
    return (
      <div className="Main row">
        <h1>Main Component</h1>
        <Section empName="Rohan" empRole="Null Stack Developer" />
        <Section empName="Rohan1" empRole="1" />
        <Section empName="Rohan2" empRole="2" />
        <Section empName="Rohan3" empRole="3" />
        <Section empName="Rohan4" empRole="4" />
        <Section empName="Rohan5" empRole="5" />
      </div>
    );
  }
}
