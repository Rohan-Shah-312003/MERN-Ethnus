import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CreateStudent from "./components/CreateStudent";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateStudent />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/student-list" element={<StudentList />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
