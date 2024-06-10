import React from 'react';
import crown from "../assets/img/crown.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div>
          <img src={crown} width={80} alt="" />
        </div>
        <h3 className="hotel-heading">Hotel Sathkaar</h3>
      </div>
      <div className="banner">
        <h1 className="banner-heading">Welcome to Hotel Sathkaar</h1>
        <p className="banner-paragraph">Make your life luxurious</p>
        <a href='./rooms'><button className="banner-button" >Check Rooms</button>  </a>
        
      </div>
    </header>
  );
}

export default Header;