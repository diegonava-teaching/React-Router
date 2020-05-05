import React from "react";
import Tarjeta from "./tarjeta";


class AllPost extends React.Component {
  state = {
    posts: null,
  }
  getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({
        posts: json,
      }));
  };

  handleRenderPost = () => {
    const { posts } = this.state
  }

  render() { 
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-3 border-right">
            <button type="button" onClick={this.getPost} class="btn btn-dark">
              Click to get all posts
            </button>
          </div>
          <div class="col-md-9">
            <h3>This is my list of post</h3>
            <p>{this.state.posts && this.state.posts.map(item => <Tarjeta id={item.id} title={item.title} body={item.body} />)}</p>
          </div>
        </div>
      </div>
    );
  }
}


export default AllPost;
