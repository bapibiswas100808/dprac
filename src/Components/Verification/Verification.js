import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import "./Verification.css";
import OTP from "../OTP/OTP";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);

  const userEmail = localStorage.getItem("email");

  const handleVerificationCode = () => {
    const verificationApiUrl =
      "https://auth.privateyebd.com/api/v1/account/verify/";
    const verificationData = {
      email: userEmail,
      code: verificationCode,
    };

    axios
      .post(verificationApiUrl, verificationData)
      .then((response) => {
        alert("Verification Successful. Please Login.");
        setVerificationStatus("success");
        localStorage.removeItem("email");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setVerificationStatus("error");
      });
  };

  const handleOTPChange = (otpString) => {
    setVerificationCode(otpString);
    setVerificationStatus(null);
  };

  return (
    <section className="verification-area">
      <div className="container pt-4">
        <Form>
          <Form.Field>
            <label>Verification Code</label>
            <OTP onChange={handleOTPChange} />
          </Form.Field>
          <button onClick={handleVerificationCode} className="btn">
            Submit
          </button>
          {verificationStatus === "success" && (
            <div className="success-message">
              Verification successful. Please login.
            </div>
          )}
          {verificationStatus === "error" && (
            <div className="error-message">
              Verification failed. Please try again.
            </div>
          )}
        </Form>
      </div>
    </section>
  );
};

export default Verification;
