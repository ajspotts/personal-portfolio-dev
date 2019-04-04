import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
  
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
          <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};

export default Navbar;
