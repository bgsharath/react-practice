import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/userLoginContect";

const Card = (props) => {
  const {loggedInUser} = useContext(userContext);
  return (
    <Link to={"/restaurant/" + props.item.id}>
      <div className="restroCard bg-slate-100">
        <div>{props.item.name}</div>
        <div>{props.item.email}</div>
        <div>Login User:{loggedInUser}</div>
      </div>
    </Link>
  );
};

export default Card;
