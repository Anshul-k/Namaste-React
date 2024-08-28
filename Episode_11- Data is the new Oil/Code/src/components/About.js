import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext.js";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="About">
        <h1>About Us</h1>
        <h2> This is Namaste React Course</h2>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return <h1>LoggedIn User is: {loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Anshul Kasana (Function)"} location={"Delhi (Function)"} /> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
