import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import "./Verification.css";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState("");

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
        localStorage.removeItem("email");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  return (
    <section className="verification-area">
      <div className="container pt-4">
        <Form>
          <Form.Field>
            <label>Verification Code</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter verification code"
            />
          </Form.Field>
          <button onClick={handleVerificationCode} className="btn">
            Submit
          </button>
        </Form>
      </div>
    </section>
  );
};

export default Verification;
