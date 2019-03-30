import React, { Component } from 'react';
//import { Link } from 'gatsby';
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
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
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
            duration={500}
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
            duration={500}
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

  // <div style={{
  //   paddingTop: '10px'
  // }}>
  //   <ul style={{
  //     listStyle: 'none',
  //     display: 'flex',
  //     justifyContent: 'space-evenly'
  //   }}>
  //   <li>
  //   <Link to='/'>Home</Link>
  //   </li>
  //   <li>
  //   <Link to='/about'>About</Link>
  //   </li>
  //   <li>
  //   <Link to='/projects'>Projects</Link>
  //   </li>
  //   </ul>
  // </div>

  

export default Navbar;
