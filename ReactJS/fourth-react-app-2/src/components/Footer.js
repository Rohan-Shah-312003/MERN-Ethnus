import logo from "../logo.svg";
export default function Footer() {
  return (
    <div className="Footer row">
      <div className="col-sm-12 cold-md-6 col-lg-3">
        <h1> Visit Us </h1>
        <ol>
          <li>
            <a href="#">One</a>
          </li>
          <li>
            <a href="#">Two</a>
          </li>
          <li>
            <a href="#">Three</a>
          </li>
          <li>
            <a href="#">Four</a>
          </li>
        </ol>
      </div>
      <div className="col-sm-12 cold-md-6 col-lg-3">
        <h1> Our Blogs </h1>
        <ul>
          <li>
            <a href="#">One</a>
          </li>
          <li>
            <a href="#">Two</a>
          </li>
          <li>
            <a href="#">Three</a>
          </li>
          <li>
            <a href="#">Four</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-12 cold-md-6 col-lg-3">
        <a>
          <img src={logo} />
        </a>
      </div>
    </div>
  );
}
