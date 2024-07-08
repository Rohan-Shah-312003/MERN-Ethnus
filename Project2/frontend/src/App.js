import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import CreatePodcasts from "./pages/createPodcast";
import SavedPodcasts from "./pages/savedPodcasts";
import Navbar from "./components/navbar";
import YouTubeEmbed from "./pages/YouTubeEmbed";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<Navbar />*/}
        <div className=" container">
          <div className="row">
            <div className="col">
              <Navbar />
            </div>
          <div className="col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/createpodcasts" element={<CreatePodcasts />} />
              <Route path="/savedpodcasts" element={<SavedPodcasts />} />
              <Route path="/youtube" element={<YouTubeEmbed />} />
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
