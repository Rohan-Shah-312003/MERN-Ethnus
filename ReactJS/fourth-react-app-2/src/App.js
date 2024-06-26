//import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import Header from "./components/Header";
//import Footer from "./components/Footer";
//import Nav from "./components/Nav";
//import { HashRouter, Routes, Route } from "react-router-dom";
//import { Home, About, Contact, Team } from "./components/Main";
import C1 from "./components/C1";
//import F1 from "./components/F1";

function App() {
  return (
    <div className="App">
      {/*<HashRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </HashRouter>*/}

      <C1 />
      {/*<F1 />*/}
    </div>
  );
}

export default App;
