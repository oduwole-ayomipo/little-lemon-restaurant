import { React, useState } from "react";
import "../styles/Reservations.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function ConfirmForm({ basicFormData, reservationFormData }) {
  const [confirmedForm, setConfirmedForm] = useState();

  const formik = useFormik({
    initialValues: {
      agreements: false,
    },
    onSubmit: (values) => {
      setConfirmedForm(true);
      console.log("Agreed", values);
    },
    validationSchema: Yup.object({
      agreements: Yup.bool().oneOf(
        [true],
        "you need to accept the terms and conditions "
      ),
    }),
  });
  return (
    <>
      <div>
        <div className="confirm-form">
          <li>CONFIRM YOUR RESERVATION</li>
        </div>
        <form
          className="reservations-basic-form"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <div>First Name: {basicFormData?.firstName}</div>
            <div>Last Name: {basicFormData?.firstName}</div>
            <div>Phone Number: {basicFormData?.mobileNumber}</div>
            <div>Email Address: {basicFormData?.emailAddress}</div>
          </div>
          <div>
            <div> Date: {reservationFormData?.resDate}</div>
            <div> Time: {reservationFormData?.resTime}</div>
            <div> Guests: {reservationFormData?.guests}</div>
            <div> Occassion: {reservationFormData?.occasion}</div>
          </div>
          <div>
            <input
              className="agreements-checkbox"
              type="checkbox"
              name="agreements"
              id="agreements"
              value={formik.values.agreements}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="agreements-label" htmmlFor="agreements">
              I agree to the terms and conditions of Little Lemon Restaurant
            </label>
            <p>
              {formik.errors.agreements &&
                formik.touched.agreements &&
                formik.errors.agreements}
            </p>
          </div>

          <button className="active-btn" type="submit">
            Confirm
          </button>
        </form>
        <div>
          {confirmedForm && (
            <p>
              Thank you, Your reservation has been made. Kindly visit your email
              for your bookings receipt
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ConfirmForm;
