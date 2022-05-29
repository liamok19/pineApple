import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="navLinks">
        <Link className='navStyle' to='/about'>
          <li> About Page </li>
        </Link>
        <Link className='navStyle' to='/trending'>
          <li> Best in Season </li>
        </Link>
        <Link className='navStyle' to='/facts'>
          <li> Other Facts </li>
        </Link>
      </ul>
    </nav>
  );
}
