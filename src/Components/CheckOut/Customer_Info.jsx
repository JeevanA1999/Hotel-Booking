import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { MdSmokingRooms } from "react-icons/md";

function Customer_Info({ room, price }) {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  // const { room, price } = useParams();
  const [fullName, setFullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [phnumber, setPhNumber] = useState("");
  const [smokingPreference, setSmokingPreference] = useState('');
  const [bedPreference, setBedPreference] = useState('');

  const handleSmokingChange = (event) => {
    setSmokingPreference(event.target.value);
  };

  const handleBedChange = (event) => {
    setBedPreference(event.target.value);
  };
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


  const [isForSomeoneElse, setIsForSomeoneElse] = useState(false);

  const handleCheckboxChange = () => {
    setIsForSomeoneElse(!isForSomeoneElse);
  };
  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-flex">
          <h1>Let us know who you are</h1>
          <div>
            <label className="input-container">
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="input-container">
              Email:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <p>
            If you enter your email address and do not complete your
            reservation, we may send you reminders to help you resume your
            booking.
          </p>
          <div className="input-container-row">
            <div>
              <label className="input-container">
                Phone Number:
                <input
                  type="tel"
                  value={phnumber}
                  onChange={(e) => setPhNumber(e.target.value)}
                />
              </label>
            </div>
            <div className="div-dropdown">
              <label className="input-container">
                Country/region of residence
                <Select
                  options={options}
                  value={value}
                  onChange={changeHandler}
                />
              </label>
              <br />
            </div>
          </div>  
          
          
          <div>
      <div className="check2"  >
        <label>
          <input className="check1"
            type="checkbox"
            checked={isForSomeoneElse}
            onChange={handleCheckboxChange}
          />
          <p style={{marginLeft:`30px`, fontSize:`larger`}}>Make this booking for someone else</p>
          </label>
      </div>

      {isForSomeoneElse && (
        <div className="guest-info">
          <h2>Guest Information</h2>
          <div>
            <label className="input-container">
              Full name
              <input type="text" name="fullName" />
            </label>
          </div>
          <div>
          <label className="input-container">
                Country/region of residence
                <Select
                  options={options}
                  value={value}
                  onChange={changeHandler}
                />
              </label>
          </div>
        </div>
      )}
    </div>
    <div className="preferences-form">
      <h2>Let us know what you need</h2>
      <p>Subject to availability. Your selections will be sent to the property right after you book.</p>
      
      <div className="form-section">
        <p className="head111">Do you have a smoking preference?</p>
        <div className="smoking-preference">
          <span className="smoking1">
        <label >
          <input
            type="radio"
            value="non-smoking"
            checked={smokingPreference === 'non-smoking'}
            onChange={handleSmokingChange}
          />
          <MdSmokingRooms/>
         <p> Non-smoking</p>
        </label>
        </span>
        <label>
          <input
            type="radio"
            value="smoking"
            checked={smokingPreference === 'smoking'}
            onChange={handleSmokingChange}
          />
          Smoking
        </label>
        </div>
      </div>

      <div className="form-section">
        <p className="head111">What bed configuration do you prefer?</p>
        <div className="smoking-preference">
        <label>
          <input
            type="radio"
            value="large-bed"
            checked={bedPreference === 'large-bed'}
            onChange={handleBedChange}
          />
          I'd like a large bed
        </label>
        <label>
          <input
            type="radio"
            value="twin-beds"
            checked={bedPreference === 'twin-beds'}
            onChange={handleBedChange}
          />
          I'd like twin beds
        </label>
        </div>
      </div>
    </div>
          
        </div>
      </form>

      {/* <form onSubmit={handleFormSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <p>
            If you enter your email address and do not complete your
            reservation, we may send you reminders to help you resume your
            booking
          </p>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phnumber}
              onChange={(e) => setPhNumber(e.target.value)}
            />
          </label>
          <br />

          <label>
            Country/region of residence
            <Select options={options} value={value} onChange={changeHandler} />
          </label>
          <br />

          <label>
            Check-in Date:
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </label>
          <br />
          <label>
            Check-out Date:
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </label>
          <br />
          <div>
            <h3>Let us know what you need</h3>

<p>Subject to availability. Your selections will be sent to the property right after you book.</p>
            <label for="smoking-preference">Do you have a smoking preference?</label>
            <br />
            <input
              type="radio"
              id="non-smoking"
              name="smoking"
              value="non-smoking"
            />
            <label for="non-smoking">Non-smoking</label>
            <br />
            <input type="radio" id="smoking" name="smoking" value="smoking" />
            <label for="smoking">Smoking</label>
            <br />
          </div>
          <button type="submit">Calculate Price</button>
        </form>
        <h2>Calculated Price: ₹{calculatedPrice ?? "0"}</h2>
       */}
    </div>
  );
}

export default Customer_Info;
