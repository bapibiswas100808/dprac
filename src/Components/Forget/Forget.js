import React, { useState } from "react";
import FormInput from "../FormElement/FormInput";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const [forgetInput, setForgetInput] = useState("");
  const navigateR = useNavigate();
  const handleForgetSubmit = () => {
    const forgetApi = "https://auth.privateyebd.com/api/v1/forget/password/";
    const forgetForm = {
      email: forgetInput,
    };
    axios
      .post(forgetApi, forgetForm)
      .then((response) => {
        console.log("Forget password:", response);
        localStorage.setItem("femail", forgetInput);
        navigateR(`/reset`);
      })
      .catch((error) => {
        console.error("Error:", error.response);
      });
  };

  return (
    <section>
      <div className="container">
        <Form>
          <Form.Field>
            <FormInput
              value={forgetInput}
              placeholder="Write Your Email Here"
              type="email"
              handleInput={(e) => setForgetInput(e.target.value)}
            />
          </Form.Field>
          <Button onClick={() => handleForgetSubmit()} type="submit">
            Forget Password
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Forget;
