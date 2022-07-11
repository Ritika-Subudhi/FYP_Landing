import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="fyp__navbar">
            <div className="fyp__navbar-links">
                <div className="fyp__navbar-links_logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="fyp__navbar-links_container">
                    <p><a href="#wfyp">About</a></p>
                    <p><a href="#features">Project Details</a></p>
                    <p><a href="#teammeet">The Team</a></p>
                    <p><a href="#">Contact Us</a></p>
                </div>
            </div>
            <div className="fyp__navbar-sign">
                <button type="button">Sign In / Sign Up</button>
            </div> 
            <div className="fyp__navbar-menu">
            {toggleMenu
              ? <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="fyp__navbar-menu_container scale-up-center">
              <div className="fyp__navbar-menu_container-links">
                <p><a href="#wfyp">About</a></p>
                <p><a href="#features">Project Details</a></p>
                <p><a href="#possibility">The Team</a></p>
                <p><a href="#">Contact Us</a></p>
              </div>
              <div className="fyp__navbar-menu_container-links-sign">
                <p></p>
                <button type="button">Sign In / Sign Up</button>
              </div>
            </div>
            )}
          </div>
        </div>
    )
}

export default Navbar
