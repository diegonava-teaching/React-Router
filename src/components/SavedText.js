import React from "react";

function SavedText(props) {
  const { state } = props.location;
  return <p>{state}</p>;
}

export default SavedText;
