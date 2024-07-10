import React, { useState } from "react";
import Axios from "axios";
import useGetUserID from "../hooks/useGetUserID";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function CreatePodcasts() {
  const navigator = useNavigate();
  const location = useLocation();
  const userID = useGetUserID();
  const editPodcast = location.state;
  // eslint-disable-next-line
  const [cookies, setCookies] = useCookies(["flag"]);
  const [podcast, setPodcast] = useState(editPodcast?.podcast || {
    title: "",
    genre: "",
    description: "",
    link: "",
    rating: 0,
    userOwner: userID,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPodcast((prevPodcast) => ({
      ...prevPodcast,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
        await Axios.put(
          `https://podvibe-backend-e5rm.onrender.com/podcasts/${editPodcast.podcast._id}`,
          podcast
        );
        alert("Podcast updated successfully");
      navigator("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-podcast container p-5 d-flex flex-column align-items-center ">
      <h1
        style={{ color: "ivory", fontSize: "4.2rem" }}
        className="text-center ">
        Edit Podcast
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
        <form className="bg-light d-flex flex-column w-50 " onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={podcast.title}
          />

          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            id="genre"
            onChange={handleChange}
            value={podcast.genre}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            value={podcast.description}
          ></textarea>

          <label htmlFor="link">Link</label>
          <input
            type="text"
            name="link"
            id="link"
            onChange={handleChange}
            value={podcast.link}
          />

          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            name="rating"
            id="rating"
            onChange={handleChange}
            value={podcast.rating}
          />

          <button type="submit">{editPodcast ? "Save Changes" : "Upload"}</button>
        </form>
      )}
    </div>
  );
}

