import React from "react";
import Header from "./components/Header";
import Allposts from "./components/AllPosts";
import SinglePost from "./components/SinglePost";
import TextEditor from "./components/TextEditor";
import SavedText from "./components/SavedText";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Switch } from "react-router";

function NotFound() {
  return <h1>Not Found</h1>;
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={TextEditor} />
          <Route path="/saved-text" component={SavedText} />
          <Route path="/all-posts" component={Allposts} />
          <Route path="/single-post" component={SinglePost} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
