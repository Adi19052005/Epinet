import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark" style={{ height: "100px" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/epinet.png" alt="ref.img" style={{ width: "150px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/partners">
                Our Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <button className="btn" style={{ background: "#ffaa00" }}>
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
