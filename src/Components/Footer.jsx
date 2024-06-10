import React from 'react'
import { FaHeart } from "react-icons/fa";
 import  g1 from "../assets/img/gallery-img-1.jpeg"
 import  g2 from "../assets/img/gallery-img-2.jpeg"
 import  g3 from "../assets/img/gallery-img-3.jpeg"
 import  g4 from "../assets/img/gallery-img-4.jpeg"
 import  g5 from "../assets/img/gallery-img-5.jpeg"
 import  g6 from "../assets/img/gallery-img-6.jpeg"
function Footer() {
  return (
    <footer className="footer">
    <div className="main-part">
      <div className="footer-list-wrapper">
        <h3 className="footer-heading">Hotel Sathkaar</h3>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="#" className="footer-list-link">
              support@hotelsathkaar.com
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#" className="footer-list-link">
              K S Rao Road, Mangalore
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#" className="footer-list-link">
              Tel: +91 78 4565
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-list-wrapper">
        <h3 className="footer-heading">Explore</h3>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="./" className="footer-list-link">
              Home
            </a>
          </li>
          <li className="footer-list-item">
            <a href="./about" className="footer-list-link">
              About Us
            </a>
          </li>
          <li className="footer-list-item">
            <a href="./rooms" className="footer-list-link">
              Rooms
            </a>
          </li>
          <li className="footer-list-item">
            <a href="./events" className="footer-list-link">
              Events
            </a>
          </li>
          <li className="footer-list-item">
            <a href="./customer" className="footer-list-link">
              Customers
            </a>
          </li>
          <li className="footer-list-item">
            <a href="./contact" className="footer-list-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3 className="footer-heading">Contact</h3>
        <p>Sign Up for Newsletter</p>
        <form action="#" className="footer-form">
          <input
            type="text"
            className="footer-input"
            placeholder="Your email..."
          />
          <button className="footer-btn">Sign Up</button>
        </form>
      </div>
      <div className="gallery">
        <h3 className="footer-heading">Gallery</h3>
        <div className="gallery-images">
          <div className="image-wrapper">
            <img
              src={g1}
              alt="gallery image"
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={g2}
              alt="gallery image"
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={g3}
              alt="gallery image"
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={g4}
              alt="gallery image"
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={g5}
              alt="gallery image"
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={g6}
              alt="gallery image"
              className="footer-image"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="creator-part">
      <div className="copyright-text">
        <p>Copyright © 2024. Hotel Sathkaar. All Rights Reserved</p>
      </div>
      <div className="text-right">
        <p>
          Made with <FaHeart /> by <span>Jeevan A</span>
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
