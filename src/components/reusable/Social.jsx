import React from "react";
import { Link } from "react-router-dom";

function Social({ children, link }) {
  return (
    <li className="left__linkItems">
      <Link to={link} className="left__links" target="_blank" rel="noreferrer">
        {children}
      </Link>
    </li>
  );
}

export default Social;
