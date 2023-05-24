import React from "react";

export default function MainContent(props) {
  console.log(props);
  return (
    <div>
      <h1>Advice of the day</h1>
      <h2>note</h2>
      <p>{props}</p>
    </div>
  );
}
