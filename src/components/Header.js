import React from "react";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>accueil</li>
          </NavLink>
          <NavLink
            to="coup-de-coeur"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>coup de coeur</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default header;
