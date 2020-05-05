import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navcompbar-brand">Navegacion</div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Text Editor
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Allpost">
              All Posts
            </Link>
          </li>
          {/* <li class="nav-item">
            <Link class="nav-link" to="/Single">
              Post 2
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
