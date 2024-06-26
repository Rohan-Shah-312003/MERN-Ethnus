import { useState } from "react";
import Axios from "axios";

export default function F1() {
  const [name, setName] = useState("Rohan");
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((msg) => {
        console.log(msg.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  const hancleClick = () => {
    setName("Rohan");
  };
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={hancleClick}>click</button>
      <button onClick={useEffect}>click</button>
    </div>
  );
}
