import { React } from "react";

function ConfirmForm({ basicFormValues }) {
  return (
    <div>
      <div>{basicFormValues?.firstName}</div>
      <div>{basicFormValues?.firstName}</div>
      Here, we render all the customer booking info for final confirmation.{" "}
      <br />
      Once you have submitted, all form field are disabled, can't be modified!
      I'm thinking of making the section a popup instead... we'll see
    </div>
  );
}

export default ConfirmForm;
