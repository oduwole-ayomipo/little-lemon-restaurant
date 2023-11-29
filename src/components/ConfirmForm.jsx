import { React } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ConfirmForm({ basicFormData, reservationFormData }) {
  const formik = useFormik({
    initialValues: {
      agreements: false,
    },
    onSubmit: (values) => {
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
    <div>
      <div>
        <div>
          Kindly confirm your booking details, at little lemon out job is to
          serve you right!
        </div>
        <div>
          Full Name: {basicFormData?.firstName} {basicFormData?.lastName}
        </div>
        <div>Phone Number: {basicFormData?.mobileNumber}</div>
        <div>Email Address: {basicFormData?.emailAddress}</div>
      </div>
      <div>
        <div>Reserved Date: {reservationFormData.resDate}</div>
        <div>Reserved Time: {reservationFormData.resTime}</div>
        <div>Number of Guests: {reservationFormData.guests}</div>
        <div>Type of Occassion: {reservationFormData.occasion}</div>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmmlFor="agreements">
              I agree to the terms and conditions of Little Lemon Restaurant
            </label>
            <fieldset
              type="checkbox"
              name="agreements"
              id="agreements"
              value={formik.values.agreements}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p>
              {formik.errors.agreements &&
                formik.touched.agreements &&
                formik.errors.agreements}
            </p>
          </div>

          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default ConfirmForm;
