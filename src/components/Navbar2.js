import React, { Component } from "react";

import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logo} alt="Hotel Booking" />
            </Link>
          </div>

          {!this.props.state.authenticated ? (
            <ul className={"nav-links show-nav"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link onClick={() => this.props.login()}>Login</Link>
              </li>
            </ul>
          ) : (
            <ul className={"nav-links show-nav"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link onClick={() => this.props.logout(this.props.state)}>
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}
