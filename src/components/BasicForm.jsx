import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Icon } from "@iconify/react";
import * as Yup from "yup";
import "../App.css";
import ReservationsForm from "./ReservationsForm";

function BasicForm() {
  const [loadReservationForm, setLoadReservationForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [basicFormValues, setBasicFormValues] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
  });

  //Formik
  const formik = useFormik({
    initialValues: basicFormValues,
    onSubmit: (values) => {
      console.log("onSubmit", values);
      setBasicFormValues(values);
      setLoadReservationForm(true);
      setFormSubmitted(true);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Field cannot be empty")
        .min(3, "First name must be more than 3 characters"),
      lastName: Yup.string()
        .required("Field cannot be empty")
        .min(3, "Last name must be more than 3 characters"),
      mobileNumber: Yup.string()
        .required("Field cannot be empty")
        .max(11, "Phone number must be more than 11 digits"),
      emailAddress: Yup.string()
        .required(" Field  cannot be empty")
        .email("Please provide a valid email"),
    }),
  });

  const handleLinkClick = () => {
    window.scroll(0, 0);
  };
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

        <form
          className="reservations-basic-form"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formSubmitted}
            />

            <div>
              <p>
                {formik.errors.firstName &&
                  formik.touched.firstName &&
                  formik.errors.firstName}
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="lastName">Last Name </label>

            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formSubmitted}
            />

            <div>
              <p>
                {formik.errors.lastName &&
                  formik.touched.lastName &&
                  formik.errors.lastName}
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="number"
              name="mobileNumber"
              value={formik.errors.mobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formSubmitted}
            />
            <div>
              <p>
                {formik.errors.mobileNumber &&
                  formik.touched.mobileNumber &&
                  formik.errors.mobileNumber}
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="emailAddress"> Email Address </label>

            <input
              type="text"
              name="emailAddress"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formSubmitted}
            />

            <div>
              <p>
                {formik.errors.emailAddress &&
                  formik.touched.emailAddress &&
                  formik.errors.emailAddress}
              </p>
            </div>
          </div>

          <div className="reservations-basic-form-btn">
            <Link to="/reservations">
              <Icon
                icon="fluent-mdl2:navigate-back"
                width="32"
                color="#f4ce14"
                onClick={handleLinkClick}
              />
            </Link>
            <button className="active-btn basic-info" type="submit">
              Proceed
            </button>
          </div>
        </form>
        <div>
          <li>2. BOOKING DETAILS</li>
          {loadReservationForm && <ReservationsForm />}
        </div>
      </div>
    </>
  );
}

export default BasicForm;
