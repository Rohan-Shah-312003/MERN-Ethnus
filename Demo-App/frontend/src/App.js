import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CreateStudent from "./components/CreateStudent";
import StudentList from "./components/StudentList";
import EditStudentList from "./components/EditStudentList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<CreateStudent />} />
            <Route path="/create-student" element={<CreateStudent />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path={"/edit-student/:id"} element={<EditStudentList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
