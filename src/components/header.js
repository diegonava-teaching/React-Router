import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

//PARA QUE QUEREMOS LOS PROPS DE REACT ROUTER?
// 1: Saber en que ruta estoy, y hacer ciertas acciones
// 2: Pasar state, props o cualquier tipo de informacion por medio de rutas

// function getTabLinkColor(pathname){
//     if(pathname === '/all-posts') return
//     if(pathname === '/') return
//     if(pathname === '/single-post') return
// }

function Header(props) {
  const { pathname } = props.location;

  console.log("props del header: ", props);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            style={{ background: pathname === "/" && "grey" }}
            className="nav-item"
          >
            <Link className="nav-link" to="/">
              Text Editor
            </Link>
          </li>
          <li
            style={{ background: pathname === "/all-posts" && "grey" }}
            className="nav-item"
          >
            <Link className="nav-link" to="/all-posts">
              All Posts
            </Link>
          </li>
          <li
            style={{ background: pathname === "/single-post" && "grey" }}
            className="nav-item"
          >
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
