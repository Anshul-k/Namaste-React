import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Conrtuctor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="About">
        <h1>About Us</h1>
        <h2> This is Namaste React Course</h2>
        {/* <User name={"Anshul Kasana (Function)"} location={"Delhi (Function)"} /> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
