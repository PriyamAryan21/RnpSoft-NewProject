import React, { useState } from 'react';
import './Navbar.css';
import logo from "./Images/logo.png"
import menu from "./Images/menu.png"
import close from "./Images/close.png"

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <nav>
      <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <li onClick={hideSidebar}>
          <a>
            <img style={{height:"30px"}} src={close} alt="" />
          </a>
        </li>
        <li><a href="/">Home</a></li>
        <li><a href="/">FAQ's</a></li>
        <li><a href="/">Reviews</a></li>
        <li><a href="/">Members</a></li>
        <li><a className='contactUsBtn' href="/contact">Contact Us</a></li>
      </ul>
      <ul>
        <li><a href="/"><img src={logo} alt="" /></a></li>
        <li className="hideOnMobile"><a href="/">Home</a></li>
        <li className="hideOnMobile"><a href="/">FAQ's</a></li>
        <li className="hideOnMobile"><a href="/" >Reviews</a></li>
        <li className="hideOnMobile"><a href="/" >Members</a></li>
        <li className="hideOnMobile"><a className='contactUsBtn' href="/contact">Contact Us</a></li>
        <li className="menu-button" onClick={showSidebar}>
          <a>
            <img src={menu} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
