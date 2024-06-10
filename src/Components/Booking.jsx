import React, { useState, useMemo } from "react";
import { CheckOut_Steps } from '../Components/CheckOut/CheckOut_Steps.jsx'
import Select from "react-select";
import countryList from "react-select-country-list";
import { useParams } from "react-router-dom";
import Stepper from "./Stepper/Stepper";
import StepperControl from "./Stepper/StepperControl";
import CheckOut_Stepper from "./CheckOut/CheckOut_Stepper";


function Booking() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const { room, price } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [phnumber, setPhNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Calculate the number of nights
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDifference = checkOut - checkIn;
    const numberOfNights = timeDifference / (1000 * 60 * 60 * 24);

    // Calculate the total price
    const totalPrice = numberOfNights * price;
    setCalculatedPrice(totalPrice);
  };

  return (
    <section className="contact-us">
      <div className="common-header">
        <h1 className="common-heading">Booking</h1>
        <div className="underline">
          <div className="small-underline" />
          <div className="big-underline" />
        </div>
      </div>
      <div className="booking-steps">
      <CheckOut_Stepper stepConfig={CheckOut_Steps} room={room} price={price}/>

      </div>
    </section>
  );
}

export default Booking;
