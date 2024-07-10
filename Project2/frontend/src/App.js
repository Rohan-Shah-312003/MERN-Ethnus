import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import CreatePodcasts from "./pages/createPodcast";
import EditPodcasts from "./pages/editPodcast";
import SavedPodcasts from "./pages/savedPodcasts";
import Navbar from "./components/navbar";
import YouTubeEmbed from "./pages/YouTubeEmbed";
import MyPodcasts from "./pages/myPodcasts";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className=" container m-0 p-0">
          <div className="row">
            <div className="col-3 height-100-vh">
              <Navbar />
            </div>
            <div className="col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/createpodcasts" element={<CreatePodcasts />} />
                <Route path="/editpodcasts" element={<EditPodcasts />} />
                <Route path="/savedpodcasts" element={<SavedPodcasts />} />
                <Route path="/youtube" element={<YouTubeEmbed />} />
                <Route path="/mypodcasts" element={<MyPodcasts />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
