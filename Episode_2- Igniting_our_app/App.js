import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 Tag"),
    React.createElement("h2", {}, "I am an h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 Tag"),
    React.createElement("h2", {}, "I am an h2 Tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "abc" },
  "Hello world from React !!"
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
