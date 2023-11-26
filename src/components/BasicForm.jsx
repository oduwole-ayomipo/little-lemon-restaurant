import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ReservationForm() {
  // State variables for form fields using usestate hook
  const [BasicFormData, setBasicFormData] = useState({
    firstName: "",
    lastName: "",
    prefix: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    emailAddress: "",
  });

  // Function to handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBasicFormData({
      ...BasicFormData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", BasicFormData);
  };

  //if form subit is valid, route to the reservations form via the submit btn.... link the submitbnt to reservations form
  return (
    <div className="reservations-basic-info">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={BasicFormData.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={BasicFormData.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Prefix:
            <input
              type="number"
              name="prefix"
              value={BasicFormData.prefix}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Mobile Number:
            <input
              type="number"
              name="mobileNumber"
              value={BasicFormData.mobileNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Prefix:
            <input
              type="number"
              name="prefix"
              value={BasicFormData.prefix}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Alternate Mobile Number:
            <input
              type="number"
              name="alternateMobileNumber"
              value={BasicFormData.alternateMobileNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email Adress:
            <input
              type="text"
              name="emailAddress"
              value={BasicFormData.emailAddress}
              onChange={handleChange}
            />
          </label>
        </div>

        <Link to="/reservations">
          <button type="">Back</button>
        </Link>
        <div>
          <button type="submit">Proceed</button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
