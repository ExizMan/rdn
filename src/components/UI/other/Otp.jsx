import React from "react";
import OTPInput from "react-otp-input";
import { useState } from "react";
import classes from "./Register.module.css";
const Otp = ({ ...props }) => {
  const [otp, setOtp] = useState("");
  return (
    <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
};

export default Otp;
