import { React, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/Reservations.css";
import ConfirmForm from "./ConfirmForm";

const ReservationForm = () => {
  const [loadConfirmation, setLoadConfirmation] = useState(false);
  const initialValues = {
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "",
  };

  const validationSchema = Yup.object({
    resDate: Yup.date().required("Date is required"),
    resTime: Yup.string().required("Time is required"),
    guests: Yup.number()
      .required("Number of guests is required")
      .min(1, "Must be at least 1")
      .max(10, "Cannot exceed 10"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const onSubmit = (values) => {
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    setLoadConfirmation(true);
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
            type="date"
            id="resDate"
            name="resDate"
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
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
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
            type="number"
            placeholder="0"
            min="1"
            max="10"
            id="guests"
            name="guests"
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
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <p>
            {formik.errors.occasion &&
              formik.touched.occasion &&
              formik.errors.occasion}
          </p>
        </div>

        <div className="reservations-basic-form-btn">
          <button className="active-btn basic-info" type="submit">
            Make Your reservation
          </button>
        </div>
      </form>
      <div>
        <li>3. CONFIRMATION</li>
        {loadConfirmation && <ConfirmForm />}
      </div>
    </>
  );
};

export default ReservationForm;
