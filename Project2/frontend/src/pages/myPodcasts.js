import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import useGetUserID from "../hooks/useGetUserID";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/card.css";

export default function MyPodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [myPodcasts, setMyPodcasts] = useState([]);
  // eslint-disable-next-line
  const [cookies, setCookies] = useCookies(["flag"]);
  const userID = useGetUserID();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUploadedPodcast = async () => {
      try {
        const response = await Axios.get(
          "https://podvibe-backend-e5rm.onrender.com/podcasts"
        );
        setPodcasts(response.data);

        setMyPodcasts(
          response.data.filter((podcast) => podcast.userOwner === userID)
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchUploadedPodcast();
  }, [userID, myPodcasts]);

  const removePodcast = async (podcastID) => {
    try {
      const response = await Axios.delete(
        `https://podvibe-backend-e5rm.onrender.com/podcasts/delete-podcasts/${podcastID}/${userID}`
      );

      if (response.status === 200) {
        setPodcasts(podcasts.filter((podcast) => podcast._id !== podcastID));
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

  const editPodcast = (podcastID) => {
    try {
      const podcast = myPodcasts.find((podcast) => podcast._id === podcastID);
      console.log(podcast);
      navigate("/editpodcasts", { state: { podcast } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1
        style={{ color: "white", fontSize: "4.2rem" }}
        className="text-center ">
        My Podcasts
      </h1>

      <div className="row">
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
        {!podcasts ? (
          <p style={{ color: "white", fontSize: "4.2rem" }}>
            No uploaded Podcasts
          </p>
        ) : (
          <br></br>
        )}

        {myPodcasts.map((podcast) => (
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
              <div className="btn-container">
                <button
                  className="btn btn-outline-primary p-2 m-2"
                  onClick={() => handleViewVideo(podcast.link)}>
                  View Podcast
                </button>

                <button
                  className="btn btn-outline-secondary p-2 m-2"
                  onClick={() => editPodcast(podcast._id)}>
                  Edit Podcast
                </button>

                <button
                  className="btn btn-outline-danger p-2 m-2"
                  onClick={() => removePodcast(podcast._id)}>
                  Delete Podcast
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
