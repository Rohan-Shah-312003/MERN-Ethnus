import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import useGetUserID from "../hooks/useGetUserID";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/card.css";

export default function SavedPodcasts() {
  const [savedPodcasts, setSavedPodcasts] = useState([]);
  const [cookies, setCookies] = useCookies(["flag"]);
  const userID = useGetUserID();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSavedPodcast = async () => {
      try {
        const response = await Axios.get(
          `https://podvibe-backend-e5rm.onrender.com/podcasts/savedpodcasts/${userID}`
        );
        console.log("Fetch Saved Podcast Response:", response);

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
  }, [userID]);

  const removePodcast = async (podcastID) => {
    try {
      const response = await Axios.delete(
        `https://podvibe-backend-e5rm.onrender.com/podcasts/${podcastID}/${userID}`
      );
      console.log("Remove Podcast Response:", response);

      if (response.status === 200) {
        setSavedPodcasts(
          savedPodcasts.filter((podcast) => podcast._id !== podcastID)
        );
      } else {
        console.error(
          "Failed to remove podcast:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewVideo = (link) => {
    navigate("/youtube", { state: { link } });
  };

  return (
    <div>
      <h1
        style={{ color: "white", fontSize: "4.2rem" }}
        className="text-center ">
        Saved Podcasts
      </h1>
      {!cookies.flag ? (
        <p
          style={{ color: "red", fontSize: "1.2rem" }}
          className="bg-warning red">
          <Link
            style={{ color: "red", fontSize: "1.2rem" }}
            className="nav-link "
            to="/auth">
            Login/Register to access this feature
          </Link>
        </p>
      ) : (
        <br></br>
      )}
      {!savedPodcasts ? (
        <p style={{ color: "white", fontSize: "4.2rem" }}>No saved Podcasts</p>
      ) : (
        <br></br>
      )}
      <div className="row">
        {savedPodcasts.map((podcast) => (
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
              <div
                className="btn-container"
                onClick={() => removePodcast(podcast._id)}>
                <button
                  className="btn btn-outline-primary p-2 m-2"
                  onClick={() => handleViewVideo(podcast.link)}>
                  View Video
                </button>
                <button
                  className="btn btn-outline-secondary p-2 m-2"
                  onClick={() => removePodcast(podcast._id)}>
                  Unsave
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
