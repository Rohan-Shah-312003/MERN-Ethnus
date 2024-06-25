import { useState } from "react";

export default function F1() {
  const [name, setName] = useState("Rohan");
  const hancleClick = () => {
    setName("Rohan");
  };
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={hancleClick}>click</button>
    </div>
  );
}
