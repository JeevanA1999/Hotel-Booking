
import React from 'react';
import img1 from "../assets/img/about-us-img-1.jpeg";
import img2 from "../assets/img/about-us-img-2.jpeg";
import img3 from "../assets/img/about-us-img-3.jpeg";
import img4 from "../assets/img/about-us-img-4.jpeg";

function About() {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h1 className="about-us-heading">About Us</h1>
        <div className="underline">
          <div className="small-underline" />
          <div className="big-underline" />
        </div>
        <h3 className="sub-heading">Hotel Sathkaar</h3>
        <p className="about-us-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          voluptates, temporibus unde, nisi at consectetur obcaecati aut ad esse
          molestiae non eum sint accusamus tempora illo saepe est! Tempore,
          repudiandae!
        </p>
        <button className="about-us-btn">
          Read More
          <i className="fas fa-angle-double-right btn-arrow" />
        </button>
      </div>
      <div className="about-us-images">
        <img src={img1} className="image image-1" alt="" />
        <img src={img2} className="image image-2" alt="" />
        <img src={img3} className="image image-3" alt="" />
        <img src={img4} className="image image-4" alt="" />
      </div>
    </section>
  );
}

export default About;