import React from "react";
import "./Button.css";

const Button = (props) => {
  return <a className = "btn btn--green btn--animated">{props.children} </a>;
};

export default Button;
