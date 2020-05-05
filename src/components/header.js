import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function Header(props) {
  console.log("Header props: ", props);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navcompbar-brand">NAV-BAR</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Text Editor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/all-posts">
              All Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/single-post">
              Single Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Header);
