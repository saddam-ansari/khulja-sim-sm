import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saddam-ansari");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Class Component</h1>
        <img src={avatar_url} alt="" />
        <h2>
          LoggedIn User: <UserContext.Consumer>
            {({loggedInUser}) => <span className="font-bold">{loggedInUser}</span>}
          </UserContext.Consumer>
        </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: saddamansari426@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
