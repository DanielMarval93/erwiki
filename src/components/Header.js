import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ backgroundColor: "black" }}
    >
      <Dropdown/>
      <Link to="/" className="item">
        <img
          src="https://cultura-gamer.com/wp-content/uploads/2021/01/logo11.png"
          alt="Elden Ring Lore Wiki"
        />
      </Link>

      <div className="right menu"></div>
      <div className="ui divider"></div>
    </div>
  );
};

export default Header;
