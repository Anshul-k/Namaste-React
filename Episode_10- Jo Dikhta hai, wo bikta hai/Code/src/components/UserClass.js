import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };

    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Anshul-k");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
    // console.log(this.props.name + " Child Component Did Mount");
  }

  render() {
    // console.log(this.props.name + " Child Render");

    const { name, location, avatar_url, login } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="AvatarURL" />
        <h2>UserName:{name}</h2>
        <h2>Location:{location}</h2>
        <h2>Contact:@{login}</h2>
      </div>
    );
  }
}

export default UserClass;

/*******
 *
 * ----- Mounting -------
 * Constructor (Dummy)
 * Render (Dummy)
 *    <HTML>DUMMY</HTML>
 *    <this.setState> -> State variable is Updated
 *
 * ------ Updating --------
 * Render(API data)
 * <HTML>New API data</HTML>
 * ComponentDidUpdate
 *
 */
