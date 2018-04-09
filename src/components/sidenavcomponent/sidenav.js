import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';


class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Me</Link>
              {/* <a href="#">About Me</a> */}
            </li>
            <li className="last">
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideNav;
