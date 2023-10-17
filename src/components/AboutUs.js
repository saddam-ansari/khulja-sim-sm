// import { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
  // const {loggedInUser} = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste</h2>
      <UserClass />
    </div>
  );
};

export default AboutUs;
