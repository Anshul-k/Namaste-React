/*<div id="parent">
    <div id="child1">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
    <div id="child1">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div>

ReactElement(object) => HTML( Browser Understands)*/

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
