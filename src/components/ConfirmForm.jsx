import { React, useState } from "react";
import "../styles/Reservations.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function ConfirmForm({ basicFormData, reservationFormData }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [confirmedForm, setConfirmedForm] = useState();

  const formik = useFormik({
    initialValues: {
      agreements: false,
    },
    onSubmit: (values) => {
      setConfirmedForm(true);
      console.log("Agreed", values);
      setFormSubmitted(true);
    },
    validationSchema: Yup.object({
      agreements: Yup.bool().oneOf(
        [true],
        "You need to accept the Terms and Conditions "
      ),
    }),
  });
  return (
    <>
      <div>
        <div className="confirm-form">
          <li>KINDLY CONFIRM YOUR RESERVATION</li>
        </div>
        <form
          className="reservations-basic-form"
          onSubmit={formik.handleSubmit}
        >
          <div className="output">
            <div>
              <h6>First Name:</h6>
              <span>{basicFormData?.firstName}</span>
            </div>
            <div>
              <h6>Last Name:</h6>
              <span>{basicFormData?.lastName}</span>
            </div>
            <div>
              <h6>Phone Number:</h6>
              <span> {basicFormData?.mobileNumber}</span>
            </div>
            <div>
              <h6>Email Address:</h6>
              <span> {basicFormData?.emailAddress}</span>
            </div>
          </div>

          <div className="divider"></div>

          <div className="output">
            <div>
              <h6>Date:</h6>
              <span> {reservationFormData?.resDate}</span>
            </div>
            <div>
              <h6>Time:</h6>
              <span> {reservationFormData?.resTime}</span>
            </div>
            <div>
              <h6>Guests:</h6>
              <span> {reservationFormData?.guests}</span>
            </div>
            <div>
              <h6>Occassion:</h6>
              <span>{reservationFormData?.occasion}</span>
            </div>
          </div>
          <div className="agreements-container">
            <label className="agreements-label" htmmlFor="agreements">
              <input
                className="agreements-checkbox"
                type="checkbox"
                name="agreements"
                id="agreements"
                disabled={formSubmitted}
                value={formik.values.agreements}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              I agree to the Terms and Conditions of Little Lemon Restaurant
            </label>
            <p>
              {formik.errors.agreements &&
                formik.touched.agreements &&
                formik.errors.agreements}
            </p>
          </div>
          <div>
            <button
              className="active-btn"
              disabled={formSubmitted}
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
        <div>
          {confirmedForm && (
            <p>
              Thank you, Your reservation has been made. Kindly visit your email
              for your bookings receipt! Oh, No not yet, i am yet to code that{" "}
              <br />
              This and the confirmations component is going to be a modal popup
              for improved ux <br /> Also the loading spinner would look
              prettier too
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ConfirmForm;
