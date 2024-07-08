import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaHeart, FaSignOutAlt } from "react-icons/fa";

const Sidebar = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #252525;
  color: #fffff0;
  display: flex;
  flex-direction: column;
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
`;
const NavItem = styled(NavLink)`
  font-size: 18px;
  color: #fffff0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px; /* Add space between elements */
  &:hover {
    background-color: #f0f0f0;
    transition: background-color 0.2s ease-in-out;
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
        <LogoText>PodVibe</LogoText>
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
          Saved Podcast
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
