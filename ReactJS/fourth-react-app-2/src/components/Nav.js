import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="Navigation navbar bg-info px-4">
      <a className="navbar-brand" href="#">
        Shopping
      </a>

      {/*<link to="/">Shopping</link>*/}
      <div className="nav ms-auto">
        {/*<a className="nav-link">First</a>
        <a className="nav-link">Second</a>
        <a className="nav-link">Third</a>
        <a className="nav-link">Fourth</a>*/}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/team">Team</Link>
      </div>
      <button className="btn btn-success">Buy Now</button>
    </div>
  );
}
