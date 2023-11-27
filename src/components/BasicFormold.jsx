import React from "react";
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ReservationsForm from "./ReservationsForm";

function BasicForm() {
  const [BasicFormData, setBasicFormData] = useState({
    firstName: "",
    lastName: "",
    prefix: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    emailAddress: "",
  });

  const [BasicFormError, setBasicFormError] = useState({
    firstNameError: "",
    lastNameError: "",
    prefixError: "",
    mobileNumberError: "",
    alternateMobileNumberError: "",
    emailAddressError: "",
  });

  const [loadReservationForm, setLoadReservationForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Form Validation Logic
  const validateForm = () => {
    const isNameValid =
      BasicFormData.firstName.length > 3 && BasicFormData.lastName.length > 3;
    const isPrefixValid = BasicFormData.prefix.length === 3;
    const isEmailValid = validateEmail(BasicFormData.emailAddress);
    const isMobileNumberValid =
      BasicFormData.mobileNumber.length === 10 &&
      /^\d+$/.test(BasicFormData.mobileNumber);
    const isAlternateMobileNumberValid =
      BasicFormData.alternateMobileNumber.length === 10 &&
      /^\d+$/.test(BasicFormData.alternateMobileNumber);

    setBasicFormError({
      firstNameError: isNameValid
        ? ""
        : "First name must be at least 4 characters",
      lastNameError: isNameValid
        ? ""
        : "Last name must be at least 4 characters",
      prefixError: isPrefixValid ? "" : "Prefix must be 3 characters",
      mobileNumberError: isMobileNumberValid
        ? ""
        : "Mobile number must be 10 digits",
      alternateMobileNumberError: isAlternateMobileNumberValid
        ? ""
        : "Mobile number must be 10 digits",
      emailAddressError: isEmailValid ? "" : "Enter a valid email address",
    });

    const isValid =
      isNameValid &&
      isPrefixValid &&
      isEmailValid &&
      isMobileNumberValid &&
      isAlternateMobileNumberValid;
    setIsFormValid(isValid);
  };

  /// Function to handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the state and trigger validation in the callback
    setBasicFormData((prevData) => {
      const newData = {
        ...prevData,
        [name]: value,
      };

      // Trigger form validation on each input change
      validateForm(newData);

      return newData;
    });
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      console.log("Form submitted with data:", BasicFormData);
      setLoadReservationForm(true);
    } else {
      console.log("Form is not valid. Please check the errors.");
    }
  };

  const handleLinkClick = () => {
    window.scroll(0, 0);
  };

  //if form subit is valid, route to the reservations form via the submit btn.... link the submitbnt to reservations form
  return (
    <>
      <div>
        <div className="footer-lls menu-banner"></div>
        <div className="footer-lls-overlay">Little Lemon Bookings</div>
      </div>
      <div className="reservations-basic-info">
        <div>
          <li>1. BASIC INFORMATION</li>
        </div>
        <form className="reservations-basic-form" onSubmit={handleSubmit}>
          <div>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={BasicFormData.firstName}
                onChange={handleChange}
              />
              <div>
                <p>{BasicFormError.firstNameError}</p>
              </div>
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
              <div>
                <p>{BasicFormError.lastNameError}</p>
              </div>
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
              <div>
                <p>{BasicFormError.prefixError}</p>
              </div>
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
              <div>
                <p>{BasicFormError.mobileNumberError}</p>
              </div>
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
              <div>
                <p>{BasicFormError.prefixError}</p>
              </div>
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
              <div>
                <p>{BasicFormError.alternateMobileNumberError}</p>
              </div>
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
              <div>
                <p>{BasicFormError.emailAddressError}</p>
              </div>
            </label>
          </div>

          <Link to="/reservations">
            <button className="active-btn" onClick={handleLinkClick}>
              Back
            </button>
          </Link>
          <div>
            <button
              className="active-btn"
              disabled={!isFormValid}
              type="submit"
            >
              Proceed
            </button>
          </div>
        </form>
        <div>
          <li>2. BOOKING DETAILS</li>
          {loadReservationForm && <ReservationsForm />}
        </div>
        <div>
          <li>3. CONFIRMATION</li>
        </div>
      </div>
    </>
  );
}

export default BasicForm;
