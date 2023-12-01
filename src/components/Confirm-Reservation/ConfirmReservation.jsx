import { React, useState, useRef } from "react";
import "../../pages/Reservations/Reservations.css";
import LoadingSpinner from "../Loading-spinner/LoadingSpinner";
import { useFormik } from "formik";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ReserveSummary from "../Resevation-summary/ReserveSummary";

function ConfirmReservation({ basicFormData, reservationFormData }) {
  const form = useRef();
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [confirmedForm, setConfirmedForm] = useState();

  const onSubmit = async (values) => {
    console.log("Agreed?", values);
    setLoadingSpinner(true);

    //Add a 4 secs delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setConfirmedForm(true);
    setFormSubmitted(true);

    setLoadingSpinner(false);

    emailjs
      .sendForm(
        "service_9ybrkne",
        "template_ifjzgtp",
        form.current,
        "i3Q18UiwOD4wVFDQ9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      agreements: false,
    },
    onSubmit,
    validationSchema: Yup.object({
      agreements: Yup.bool().oneOf(
        [true],
        "You need to accept the Terms and Conditions "
      ),
    }),
  });
  const handleLinkClick = () => {
    window.scroll(0, 0);
  };
  return (
    <>
      <div>
        <div className="confirm-form">
          <li>KINDLY CONFIRM YOUR RESERVATION</li>
        </div>
        <form
          className="reservations-basic-form"
          ref={form}
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
              <span> {reservationFormData?.guests} Persons</span>
            </div>
            <div>
              <h6>Occasion:</h6>
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
          <div className="reservations-basic-form-btn">
            {loadingSpinner && <LoadingSpinner />}

            <Popup
              trigger={
                <div>
                  <button
                    className="active-btn basic-info"
                    disabled={formSubmitted}
                    type="submit"
                  >
                    Confirm
                  </button>
                </div>
              }
              modal
            >
              {(close) =>
                confirmedForm ? (
                  <div className="modal-container">
                    <div className="modal">
                      <Link to="/">
                        <div>
                          <button className="close" onClick={handleLinkClick}>
                            &times;
                          </button>
                        </div>
                      </Link>

                      <div className="header">
                        <div>TABLE RESERVED!</div>
                        <p>
                          Little Lemon Welcomes You
                          <br /> Kindly check your mail for reservation details.
                        </p>
                      </div>

                      <div className="content">
                        <ReserveSummary
                          firstName={basicFormData?.firstName}
                          lastName={basicFormData?.lastName}
                          mobileNumber={basicFormData?.mobileNumber}
                          emailAddress={basicFormData?.emailAddress}
                          Date={reservationFormData?.resDate}
                          Time={reservationFormData?.resTime}
                          Guests={reservationFormData?.guests}
                          Occasion={reservationFormData?.occasion}
                        />
                      </div>
                    </div>
                  </div>
                ) : null
              }
            </Popup>
          </div>
        </form>
      </div>
    </>
  );
}

export default ConfirmReservation;
