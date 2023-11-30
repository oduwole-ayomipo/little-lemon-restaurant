import { React } from "react";
import "./ReserveSummary.css";

function ReserveSummary({
  firstName,
  lastName,
  mobileNumber,
  emailAddress,
  Date,
  Time,
  Guests,
  Occasion,
}) {
  return (
    <>
      <div className="final-reservation-form ">
        <div className="final-output">
          <div>
            <h6 className="text-label"> Name</h6>
            <h6>
              {firstName} {lastName}
            </h6>
          </div>

          <div>
            <h6 className="text-label">Phone Number:</h6>
            <h6> {mobileNumber}</h6>
          </div>
          <div>
            <h6 className="text-label">Email Address:</h6>
            <h6> {emailAddress}</h6>
          </div>
        </div>
        <div className="final-output">
          <div>
            <h6 className="text-label">Date:</h6>
            <h6> {Date}</h6>
          </div>
          <div>
            <h6 className="text-label">Time:</h6>
            <h6> {Time}</h6>
          </div>
          <div>
            <h6 className="text-label">Guests:</h6>
            <h6> {Guests} Persons</h6>
          </div>
          <div>
            <h6 className="text-label">Occasion:</h6>
            <h6>{Occasion}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReserveSummary;
