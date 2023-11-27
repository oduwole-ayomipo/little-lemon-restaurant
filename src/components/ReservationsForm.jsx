import { React, useState } from "react";
import { useFormik } from "formik";
import { Icon } from "@iconify/react";
import * as Yup from "yup";
import "../App.css";

function ReservationsForm() {
  const [guestValue, setGuestValue] = useState("0");
  const incrementValue = () => {
    setGuestValue(guestValue + 1);
  };
  const decrementValue = () => {
    setGuestValue(guestValue - 1);
  };

  return (
    <>
      <form className="reservations-basic-form">
        <div className="number-of-guests">
          <label>
            <h3 aria-roledescription="label">Guest</h3>
            <div className="counter-container">
              <button className="increment" onClick={incrementValue}>
                +
              </button>
              <p className="guest-amount">{guestValue}</p>
              <button className="decrement" onClick={decrementValue}>
                -
              </button>
            </div>
          </label>
        </div>
        <div className="kind-of-setting">
          <div>
            <label htmlFor="indoor">Indoor</label>
            <input type="checkbox" name="indoor" />
          </div>

          <div class="preference">
            <label htmlFor="outdoor">Outdoor</label>
            <input type="checkbox" name="outdoor" />
          </div>
        </div>

        <div className="date-picker">
          <label>Date Picker</label>
        </div>
        <div className="time-of-event">
          <button>08:30</button>
          <button>10:00</button>
          <button>14:30</button>
          <button>16:30</button>
          <button>18:00</button>
          <button>19:00</button>
          <button>20:30</button>
          <button>22:00</button>
        </div>
        <div className="special-request">
          <label htmlFor="textarea"></label>
          <textarea
            name=""
            id=""
            cols="30"
            placeholder="Any Special Request"
            rows="10"
          ></textarea>
        </div>

        <div className="reservations-basic-form-btn">
          <button className="active-btn basic-info" type="submit">
            Proceed
          </button>
        </div>
      </form>
    </>
  );
}

export default ReservationsForm;
