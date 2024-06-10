import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <input type="checkbox" className="checkbox" id="click" hidden="m" />
      {/* sidebar */}
      <div className="sidebar">
        <label htmlFor="click">
          <div className="menu-icon">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
          </div>
        </label>
        <ul className="social-icon-list">
          <li>
            <a
              href="https://www.facebook.com/"
              target="blank"
              className="social-link"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://x.com/?lang=en" className="social-link">
              <FaSquareXTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" className="social-link">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" className="social-link">
              <FaInstagramSquare />
            </a>
          </li>
        </ul>
        <div className="social-link">
          <p>2024</p>
        </div>
      </div>

      {/* end of sidebar */}
      {/* navigation */}
      <nav className="navigation">
        <div className="navigation-header">
          <h1 className="navigation-heading">Hotel Sathkaar</h1>
          <form className="navigation-search" action="">
            <input
              type="text"
              className="navigation-search-input"
              placeholder="Search..."
            />
            <button className="navigation-search-btn">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item">
            <NavLink className="navigation-link" to="/">home</NavLink>
            {/* <a href="/" className="navigation-link">
              home
            </a> */}
          </li>
          <li className="navigation-item">
            <NavLink className="navigation-link" to="/about">about</NavLink>
          </li>
          <li className="navigation-item">
          <NavLink className="navigation-link" to="/rooms">rooms</NavLink>
          </li>
          <li className="navigation-item">
          <NavLink className="navigation-link" to="/events">events</NavLink>
          </li>
          <li className="navigation-item">
          <NavLink className="navigation-link" to="/customer">customers</NavLink>
          </li>
          <li className="navigation-item">
          <NavLink className="navigation-link" to="/contact">contact</NavLink>
          </li>
        </ul>
        <div className="copyright">
          <p>© 2024. Hotel Sathkaar. All Rights Reserved</p>
        </div>
      </nav>
      {/* end of navigation */}
    </div>
  );
}

export default Navbar;
