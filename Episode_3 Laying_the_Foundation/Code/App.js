import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyx: "abc" },
//   "Hello world from React !!"
// );

//* JSX (Transpiled before it reaches the JS) - PARCEL - Babel
//* JSX => Bable transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

//* React Element
const heading = (
  <h1 className="heading" tabIndex="1">
    Namaste React 🚀
  </h1>
);
// console.log(heading);

//* React Component - Class and Functional Components

const HeadingComponent = () => (
  <div className="container">
    {/* When a component is used inside another component like this - It's called Component Composition  */}
    <Title />
    <h1 className="heading"> This is a Heading Component </h1>
  </div>
);

const Title = () => (
  <h1 className="head" tabIndex="5">
    This is a Title Component.
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
