import React from "react";
import Card from "./Card";

class AllPost extends React.Component {
  state = {
    posts: [],
  };

  getPosts = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts", { method: "POST" })
    //   .then((response) => response.json())
    //   .then((json) =>
    //     this.setState({
    //       posts: json,
    //     })
    //   );
    // fetch("https://todo-checkpoint-api.herokuapp.com/api/todos/diego", {
    //   method: "GET",
    //   body: {
    //     title: 'This is my title',
    //     checked: false
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) =>
    //     console.log(" esto es lo que regresa la api de todos: ", json)
    //   );
  };

  handleRenderPost = () => {
    const { posts } = this.state;

    if (!posts.length) return;

    const listOfPosts = posts.map((item) => (
      <Card id={item.id} title={item.title} body={item.body} />
    ));

    return listOfPosts;
  };

  render() {
    console.log("All posts props: ", this.props);
    console.log("All posts state: ", this.state);

    //pagination

    return (
      <div class="container">
        <div class="row">
          <div class="col-md-3 border-right">
            <button type="button" onClick={this.getPosts} class="btn btn-dark">
              Click to get all posts
            </button>
          </div>
          <div class="col-md-9">
            <h3>List of posts</h3>
            {this.handleRenderPost()}
          </div>
        </div>
      </div>
    );
  }
}

export default AllPost;
