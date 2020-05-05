import React from "react";
import Header from "./components/Header";
import Allposts from "./components/AllPosts";
import SinglePost from "./components/SinglePost";
import TextEditor from "./components/TextEditor";
import SavedText from "./components/SavedText";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={TextEditor} />
      <Route exact path="/saved-text" component={SavedText} />
      <Route path="/all-posts" component={Allposts} />
      <Route exact path="/single-post" component={SinglePost} />
    </Router>
  );
}

export default App;
