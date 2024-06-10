
import React from 'react';
import singleRoom from "../assets/img/single-room.jpeg";
import doubleRoom from "../assets/img/double-room.jpeg";
import luxRoom from "../assets/img/lux.jpeg";
import vipRoom from "../assets/img/vip.jpeg";
import { Link } from 'react-router-dom';

function Rooms() {
  const single = "single";
  const double = "double";
  const lux = "lux";
  const vip = "vip";
  const pricelist = [999, 1599, 2999, 4999];

  return (
    <section className="rooms">
      <div className="common-header">
        <h1 className="common-heading">Rooms in Hotel Sathkaar</h1>
        <div className="underline">
          <div className="small-underline" />
          <div className="big-underline" />
        </div>
      </div>
      <div className="rooms-card-wrapper">
        <div className="room-card">
          <img src={singleRoom} alt="" className="room-img" />
          <div className="room-card-content">
            <h4 className="room-card-heading">Single Room</h4>
            <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
            <p className="room-price">₹ 999/-</p>
            <Link to={`/booking/${single}/${pricelist[0]}`} className="room-card-btn" price={999}>
              Book Now
            </Link>
          </div>
        </div>
        <div className="room-card">
          <img src={doubleRoom} alt="" className="room-img" />
          <div className="room-card-content">
            <h4 className="room-card-heading">Double Room</h4>
            <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
            <p className="room-price">₹ 1599/-</p>
            <Link to={`/booking/${double}/${pricelist[1]}`} className="room-card-btn" price={1599}>
              Book Now
            </Link>
          </div>
        </div>
        <div className="room-card">
          <img src={luxRoom} alt="" className="room-img" />
          <div className="room-card-content">
            <h4 className="room-card-heading">Lux</h4>
            <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
            <p className="room-price">₹ 2999/-</p>
            <Link to={`/booking/${lux}/${pricelist[2]}`} className="room-card-btn" price={2999}>
              Book Now
            </Link>
          </div>
        </div>
        <div className="room-card">
          <img src={vipRoom} alt="" className="room-img" />
          <div className="room-card-content">
            <h4 className="room-card-heading">VIP</h4>
            <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
            <p className="room-price">₹ 4999/-</p>
            <Link to={`/booking/${vip}/${pricelist[3]}`} className="room-card-btn" price={4999}>
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <div className="rooms-btn-wrapper">
        <button className="rooms-btn">Check All Rooms</button>
      </div>
    </section>
  );
}

export default Rooms;