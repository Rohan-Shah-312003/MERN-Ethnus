import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import useGetUserID from "../hooks/useGetUserID";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/header";
import About from "../components/about";

export default function Home() {
  const [podcasts, setPodcasts] = useState([]);
  const [savedPodcasts, setSavedPodcasts] = useState([]);
  const [cookies, setCookies] = useCookies(["flag"]);
  const userID = useGetUserID();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const response = await Axios.get("http://localhost:5500/podcasts");
        setPodcasts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSavedPodcast = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:5500/podcasts/savedpodcasts/ids/${userID}`
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
      const response = await Axios.put("http://localhost:5500/podcasts", {
        podcastID,
        userID,
      });
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

  //const editPodcast = async (podcastID) => {
  //  const response = await Axios.patch(`http://localhost:5500/podcasts$`, {
  //
  //  })
  //  setPodcasts(response.data)
  //}
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
          <div key={podcast._id} className="col-md-4">
            <div className="card bg-secondary m-2">
              <div className="card-body text-left  bg-secondary text-white rounded ">
                {/*<button onClick={() => editPodcast(podcast._id)}}>Edit</button>*/}
                <h5 className="card-title">{podcast.title}</h5>
                <p className="card-text">{podcast.genre}</p>
                <p className="card-text">{podcast.description}</p>
                <p className="card-text">{podcast.rating}</p>

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
                    className="btn btn-outline-light p-2 m-2"
                    onClick={() => savePodcast(podcast._id)}
                    disabled={isPodcastSaved(podcast._id)}>
                    Save Podcast
                  </button>
                )}

                <button
                  className="btn btn-outline-dark p-2 m-2"
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
