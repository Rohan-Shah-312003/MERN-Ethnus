import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["flag"]);

  const logout = () => {
    setCookies("flag", false);
    window.localStorage.clear();
    window.location.reload();
    navigate("/auth");
  };

  return (
    <div
      style={{ justifyContent: "space-evenly" }}
      className="navbar bg-dark p-2 ">
      <Link style={{ color: "white" }} className="nav-link text-center" to="/">
        Home
      </Link>
      <Link
        style={{ color: "white" }}
        className="nav-link text-center"
        to="/createrecipes">
        Create Recipe
      </Link>
      <Link
        style={{ color: "white" }}
        className="nav-link text-center"
        to="/savedrecipes">
        Saved Recipe
      </Link>
      {!cookies.flag ? (
        <Link
          style={{ color: "white" }}
          className="nav-link text-center"
          to="/auth">
          Login/Register
        </Link>
      ) : (
        <button className="btn btn-sm btn-secondary" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
}
