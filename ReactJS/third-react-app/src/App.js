import "./App.css";
import C1 from "./components/C1";
import { C2 } from "./components/C2";

function App() {
  return (
    <div className="App">
      <C1 name="Class component" />
      <C2 name="Functional component" />
    </div>
  );
}

export default App;
