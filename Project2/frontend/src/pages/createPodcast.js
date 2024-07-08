import React, { useState } from "react";
import Axios from "axios";
import useGetUserID from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
export default function CreatePodcasts() {
  const userID = useGetUserID();
  const navigator = useNavigate();
  const [cookies, setCookies] = useCookies(["flag"]);
  const [podcast, setPodcast] = useState({
    title: "",
    genre: "",
    description: "",
    link: "",
    rating: 0,
    userOwner: userID,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPodcast({
      ...podcast,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await Axios.post("http://localhost:5500/podcasts/", podcast);
      alert("Podcast uploaded successfully");
      navigator("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="create-podcast container mt-5 p-5 d-flex flex-column align-items-center ">
      <h1
        style={{ color: "white", fontSize: "4.2rem" }}
        className="text-center ">
        Create Podcasts
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
          <input type="text" name="title" id="title" onChange={handleChange} />

          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" id="genre" onChange={handleChange} />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}></textarea>

          <label htmlFor="link">Link</label>
          <input type="text" name="link" id="link" onChange={handleChange} />

          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            name="rating"
            id="rating"
            onChange={handleChange}
          />

          <button type="submit">Upload Podcast</button>
        </form>
      )}
    </div>
  );
}
