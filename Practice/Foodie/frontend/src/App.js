import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import CreateRecipes from "./pages/createRecipes";
import SavedRecipes from "./pages/savedRecipes";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className=" container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/createrecipes" element={<CreateRecipes />} />
            <Route path="/savedrecipes" element={<SavedRecipes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
