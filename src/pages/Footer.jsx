import React from "react";
import { useHistory, Link } from "react-router-dom";
import Archive from "@material-ui/icons/Archive";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import Add from "@material-ui/icons/Add";

import "./Prompts.module.css";

export default function Footer() {
  const history = useHistory();

  const handleApply = (e) => {
    history.push("/prompts");
  };

  return (
    <nav className="navbar navbar-expand-xlg fixed-bottom  bg-light">
      <Link to="/records" className="footer">
        <Archive></Archive>
        <span>Records</span>
      </Link>
      <Link to="/mood" className="footer">
        <AddCircleOutline></AddCircleOutline>
        <span>New</span>
      </Link>
      <Link to="/treats" className="footer">
        <Add></Add>
        <span>Treats</span>
      </Link>
    </nav>
  );
}
