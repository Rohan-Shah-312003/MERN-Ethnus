import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaHeart, FaSignOutAlt, FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = styled.div`
  height: 100vh;
  background-color: #252525;
  color: #fffff0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  align-items: flex-start; /* Align items to the left */
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: #fffff0;
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #fffff0;
  &:hover {
    color: #252525;
    transition: color 0.2s ease-in-out;
  }
`;
const NavItem = styled(NavLink)`
  font-size: 18px;
  color: #fffff0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 0px;
  margin-bottom: 20px; /* Add space between elements */
  &:hover {
    background-color: #f0f0f0;
    border-radius: 7px;
    transition: background-color 0.3s ease-in-out;
    padding: 10px;
  }
  &.active {
    font-weight: bold;
    color: #007bff; /* Active link color */
  }
`;
const NavIcon = styled.div`
  margin-right: 10px; /* Add space between icon and text */
  color: #fffff0;
`;
const Navbar = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["flag"]);

  const logout = () => {
    setCookies("flag", false);
    window.localStorage.clear();
    window.location.reload();
    navigate("/auth");
  };
  return (
    <Sidebar>
      <LogoContainer>
        <div className="container">
          <div className="row">
            <div className="col">
              <LogoText>PodVibe</LogoText>
            </div>
            <div className="col-3">
              <LogoText>
                <FaBars />
              </LogoText>
            </div>
          </div>
        </div>
      </LogoContainer>
      <NavItem exact to="/" activeClassName="active">
        <Link
          style={{ color: "white", fontSize: "1.2rem" }}
          className="nav-link text-center d-flex flex-row"
          to="/">
          <NavIcon>
            <FaHome />
          </NavIcon>
          Home
        </Link>
      </NavItem>
      <NavItem to="/createpodcasts" activeClassName="active">
        <Link
          style={{ color: "white", fontSize: "1.2rem" }}
          className="nav-link text-center d-flex flex-row"
          to="/createpodcasts">
          <NavIcon>
            <FaUser />
          </NavIcon>
          Create Podcast
        </Link>
      </NavItem>
      <NavItem to="/savedpodcasts" activeClassName="active">
        <Link
          style={{ color: "white", fontSize: "1.2rem" }}
          className="nav-link text-center d-flex flex-row"
          to="/savedpodcasts">
          <NavIcon>
            <FaHeart />
          </NavIcon>
          Saved Podcasts
        </Link>
      </NavItem>

      <NavItem to="/mypodcasts" activeClassName="active">
        <Link
          style={{ color: "white", fontSize: "1.2rem" }}
          className="nav-link text-center d-flex flex-row"
          to="/mypodcasts">
          <NavIcon>
            <FaHeart />
          </NavIcon>
          My Podcasts
        </Link>
      </NavItem>

      <NavItem to="/auth" activeClassName="active">
        <NavIcon>
          <FaSignOutAlt />
        </NavIcon>
        {!cookies.flag ? (
          <Link
            style={{ color: "white", fontSize: "1.2rem" }}
            className="nav-link text-center"
            to="/auth">
            Login/Register
          </Link>
        ) : (
          <Link
            style={{ color: "white", fontSize: "1.2rem" }}
            className="nav-link text-center"
            onClick={logout}>
            Logout
          </Link>
        )}
      </NavItem>
    </Sidebar>
  );
};

export default Navbar;
