import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="navbar bg-info">
        <Link to="/" className="navbar-brand mx-3">
          MERN Application
        </Link>
        <div>
          <Link to="/create-student" className="navbar-brand">
            Create Student
          </Link>
          <Link to="/student-list" className="navbar-brand">
            Student List
          </Link>
        </div>
      </nav>
    </div>
  );
}
