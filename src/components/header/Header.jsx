import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-y">
      <ul className="flex p-3 justify-around font-thin text-xl">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/project"> Project </Link>
        </li>
        <li>
          <Link to="/table"> Table </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
