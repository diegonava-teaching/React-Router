import React from "react";

function Card(props) {
  console.log("card props: ", props);
  return (
    <div className="card">
      <div className="card-body">
        <h5 src={props}>{props.title}</h5>
        <h6 src={props}>{props.id}</h6>
        <p src={props}>{props.body}</p>
      </div>
    </div>
  );
}

export default Card;
