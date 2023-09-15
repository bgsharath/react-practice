import { useContext } from "react";
import UserContext from "../context/userLoginContect";

const About = () => {
    return (
        <div>Loggin in User:{useContext(UserContext).loggedInUser}</div>
    )
}

export default About;