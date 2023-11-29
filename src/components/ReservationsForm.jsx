import { React, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/Reservations.css";
import ConfirmForm from "./ConfirmForm";

function ReservationForm({ basicFormValues }) {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loadConfirmation, setLoadConfirmation] = useState(false);
  const [reservationForm, setReservationForm] = useState({
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "",
  });
  const initialValues = reservationForm;

  const validationSchema = Yup.object({
    resDate: Yup.date().required("Date is required"),
    resTime: Yup.string().required("Time is required"),
    guests: Yup.number()
      .required("Number of guests is requsetFormSubmittedired")
      .min(1, "Must be at least 1")
      .max(10, "Cannot exceed 10"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const onSubmit = async (values) => {
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    setLoadingSpinner(true);

    // Add a 5-second delay (sleep)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Continue with the rest of your logic after the delay
    setLoadConfirmation(true);
    setReservationForm(values);
    setFormSubmitted(true);

    setLoadingSpinner(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <form className="reservations-basic-form" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="resDate">Choose date</label>
          <input
            className="input"
            type="date"
            id="resDate"
            name="resDate"
            disabled={formSubmitted}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.resDate}
          />
          <p>
            {formik.errors.resDate &&
              formik.errors.resDate &&
              formik.touched.resDate}
          </p>
        </div>
        <div>
          <label htmlFor="resTime">Choose time</label>
          <select
            id="resTime"
            name="resTime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.resTime}
          >
            <option value="Default" hidden>
              Select to choose
            </option>
            <option value="17:00" disabled={formSubmitted}>
              17:00
            </option>
            <option value="18:00" disabled={formSubmitted}>
              18:00
            </option>
            <option value="19:00" disabled={formSubmitted}>
              19:00
            </option>
            <option value="20:00" disabled={formSubmitted}>
              20:00
            </option>
            <option value="21:00" disabled={formSubmitted}>
              21:00
            </option>
            <option value="22:00" disabled={formSubmitted}>
              22:00
            </option>
          </select>
          <p>
            {formik.errors.resTime &&
              formik.touched.resTime &&
              formik.errors.resTime}
          </p>
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            className="input"
            type="number"
            placeholder="0"
            min="1"
            max="10"
            id="guests"
            name="guests"
            disabled={formSubmitted}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.guests}
          />
          <p>
            {formik.errors.guests &&
              formik.touched.guests &&
              formik.errors.guests}
          </p>
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.occasion}
          >
            <option value="Default" hidden>
              Select to choose
            </option>
            <option disabled={formSubmitted} value="Birthday">
              Birthday
            </option>
            <option disabled={formSubmitted} value="Anniversary">
              Anniversary
            </option>
          </select>
          <p>
            {formik.errors.occasion &&
              formik.touched.occasion &&
              formik.errors.occasion}
          </p>
        </div>
        <div className="loading-spinner">
          {loadingSpinner && (
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
        <div className="reservations-basic-form-btn">
          <button
            className="active-btn basic-info"
            disabled={formSubmitted}
            type="submit"
          >
            Make Reservation
          </button>
        </div>
      </form>
      <div>
        {loadConfirmation && (
          <ConfirmForm
            basicFormData={basicFormValues}
            reservationFormData={reservationForm}
          />
        )}
      </div>
    </>
  );
}

export default ReservationForm;
