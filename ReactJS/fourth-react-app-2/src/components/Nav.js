/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Nav() {
  return (
    <div className="Navigation navbar bg-info px-4">
      <a className="navbar-brand" href="#">
        Shopping
      </a>

      {/*<link to="/">Shopping</link>*/}
      <div className="nav ms-auto">
        <a className="nav-link">First</a>
        <a className="nav-link">Second</a>
        <a className="nav-link">Third</a>
        <a className="nav-link">Fourth</a>
        {/*<link to="/">Home</link>
        <link to="/about">About</link>
        <link to="/contact">Contact</link>
        <link to="/team">Team</link>*/}
      </div>
      <button className="btn btn-success">Buy Now</button>
    </div>
  );
}
