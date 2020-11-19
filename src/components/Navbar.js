import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar2">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <button className="bookNow">BOOK NOW</button>
          </Link>
        </div>

        <ul className={"nav-links show-nav"}>
          <li>
            <Link to="/">Resorts</Link>
          </li>
          <li>
            <Link to="/">Entertainment</Link>
          </li>
          <li>
            <Link to="/">Nightlife</Link>
          </li>
          <li>
            <Link to="/">Restaurants</Link>
          </li>
          <li>
            <Link to="/">Casino</Link>
          </li>
          <li>
            <Link to="/">Things to Do</Link>
          </li>
          <li>
            <Link to="/">Groups & Weddings</Link>
          </li>
          <li>
            <Link to="/">M life Rewards</Link>
          </li>
          <li>
            <Link to="/">Offers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
