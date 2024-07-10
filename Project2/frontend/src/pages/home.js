import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import useGetUserID from "../hooks/useGetUserID";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import About from "../components/about";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/card.css";

export default function Home() {
  const [podcasts, setPodcasts] = useState([]);
  const [savedPodcasts, setSavedPodcasts] = useState([]);
  // eslint-disable-next-line
  const [cookies, setCookies] = useCookies(["flag"]);
  const userID = useGetUserID();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const response = await Axios.get(
          "https://podvibe-backend-e5rm.onrender.com/podcasts"
        );
        setPodcasts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSavedPodcast = async () => {
      try {
        const response = await Axios.get(
          `https://podvibe-backend-e5rm.onrender.com/podcasts/savedpodcasts/ids/${userID}`
        );

        // Validate response structure
        if (response.data && response.data.savedPodcasts) {
          setSavedPodcasts(response.data.savedPodcasts);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSavedPodcast();
    fetchPodcast();
  }, [userID]);

  const savePodcast = async (podcastID) => {
    try {
      const response = await Axios.put(
        "https://podvibe-backend-e5rm.onrender.com/podcasts",
        {
          podcastID,
          userID,
        }
      );
      console.log("Save Podcast Response:", response);

      // Validate response structure
      if (response.data && response.data.savedPodcasts) {
        setSavedPodcasts(response.data.savedPodcasts);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isPodcastSaved = (podcastID) => {
    return savedPodcasts.includes(podcastID);
  };

  const handleViewVideo = (link) => {
    navigate("/youtube", { state: { link } });
  };
  return (
    <div>
      <Header />
      <About />
      <h1
        style={{ color: "white", fontSize: "4.2rem" }}
        className="text-center ">
        Podcasts Currently Available:
      </h1>
      <br></br>
      <div className="row">
        {podcasts.map((podcast) => (
          <div className="card custom-card">
            <div key={podcast._id} className="card-body">
              <h5 className="card-title">{podcast.title}</h5>
              <p className="card-text">
                <label className="card-label">Genre:</label> {podcast.genre}
              </p>
              <p className="card-text">
                <label className="card-label">Description:</label>
                {podcast.description}
              </p>
              <p className="card-text">
                <label className="card-label">Rating:</label> {podcast.rating}
              </p>
              {!cookies.flag ? (
                <p
                  style={{ color: "red", fontSize: "1.2rem" }}
                  className="bg-warning red">
                  <Link
                    style={{ color: "red", fontSize: "1.2rem" }}
                    className="nav-link "
                    to="/auth">
                    Login/Register to access save feature
                  </Link>
                </p>
              ) : (
                <button
                  className="btn btn-outline-secondary p-2 m-2"
                  onClick={() => savePodcast(podcast._id)}
                  disabled={isPodcastSaved(podcast._id)}>
                  Save Podcast
                </button>
              )}
              <div className="btn-container">
                <button
                  className="btn btn-outline-primary p-2 m-2"
                  onClick={() => handleViewVideo(podcast.link)}>
                  View Video
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
