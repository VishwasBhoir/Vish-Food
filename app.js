import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "div",
  { className: "heading", id: "heading" },
  [
    React.createElement("h1", {}, "Hello From React!"),
  ]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
