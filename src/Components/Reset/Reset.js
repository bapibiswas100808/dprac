import React from "react";
import { Form } from "semantic-ui-react";
import FormInput from "../FormElement/FormInput";
import { useState } from "react";
import axios from "axios";
import "./Reset.css";
import OTP from "../OTP/OTP";

const Reset = () => {
  const [resetInput, setResetInput] = useState("");
  const [newPswInput, setNewPswInput] = useState("");
  const resetEmail = localStorage.getItem("femail");
  const handleReset = () => {
    const resetApi =
      "https://auth.privateyebd.com/api/v1/forget/password/confirm/";
    const resetForm = {
      email: resetEmail,
      code: resetInput,
      password: newPswInput,
    };
    axios
      .post(resetApi, resetForm)
      .then((response) => {
        console.log("reset password:", response.data);
        alert("Password Changed Successfully");
        localStorage.removeItem("femail");
      })
      .catch((error) => {
        console.error("Error:", error.response);
      });
  };
  return (
    <section className="reset-area">
      <div className="container">
        <Form>
          <Form.Field>
            <label>Write Verification Code Here</label>
            <OTP onChange={(e) => setResetInput(e)} />
          </Form.Field>
          <Form.Field>
            <FormInput
              value={newPswInput}
              placeholder="Write Your new password Here"
              type="password"
              handleInput={(e) => setNewPswInput(e.target.value)}
            />
          </Form.Field>
          <button onClick={() => handleReset()} type="submit" className="btn">
            Set New Password
          </button>
        </Form>
      </div>
    </section>
  );
};

export default Reset;
