import React from "react";
import Header from "./components/header";
import Allposts from "./components/allPosts";
import Single from "./components/singlePost";
import TextEditor from "./components/text-editor";
import "./App.css";


import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={TextEditor} />
      <Route path="/Allpost" component={Allposts} />
      <Route exact path="/Single" component={Single} />
    </Router>
  );
}

export default App;
