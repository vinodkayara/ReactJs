import React from 'react';
import './navbar.css';
import logo from '../NavBar/logo.png'// Ensure this path is correct
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">clients</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
