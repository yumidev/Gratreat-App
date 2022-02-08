import React from "react";
import "./Prompts.module.css";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top  ">
      <div>
        <h6>{props.text}</h6>
        <h2>{props.title}</h2>
      </div>
    </nav>
  );
}
