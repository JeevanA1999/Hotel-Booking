import React from "react";

function Contact() {
  return (
    <section className="contact-us">
      <div className="common-header">
        <h1 className="common-heading">Contact Us</h1>
        <div className="underline">
          <div className="small-underline" />
          <div className="big-underline" />
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-form">
          <h2 className="contact-form-header">Send a Message</h2>
          <div className="form__input-group">
            <div className="form__input-div">
            <label>First Name</label>
            <input type="text " required></input>
          </div>
          <div className="form__input-div">
            <label>Last Name</label>
            <input type="text " ></input>
          </div>
           
          <div className="form__input-div">
            <label>Email</label>
            <input type="email" required></input>
          </div>
          <div className="form__input-div">
            <label>What can we help you with?</label>
            <input type="text" required></input>
          </div>
          <button>Send</button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
