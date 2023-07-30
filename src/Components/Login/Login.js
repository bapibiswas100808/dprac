import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Login.css";
import FormInput from "../FormElement/FormInput";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState("");
  const [lgPswInput, setLgPswInput] = useState("");
  const handleInput = (e) => {
    const getInput = e.target.value;
    setInput(getInput);
  };
  const handleLgPswInput = (e) => {
    const getLgPswInput = e.target.value;
    setLgPswInput(getLgPswInput);
  };
  const handleLogin = () => {
    const loginApiUrl = "https://auth.privateyebd.com/api/v1/login/";
    const loginFormData = {
      email: input,
      password: lgPswInput,
    };
    axios
      .post(loginApiUrl, loginFormData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };
  return (
    <section className="login-area">
      <div className="container pt-4">
        <Form>
          <Form.Field>
            <FormInput
              input={input}
              handleInput={handleInput}
              type="email"
              placeholder={"Email adress"}
              label={"Email Address"}
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              lgPswInput={lgPswInput}
              handleInput={handleLgPswInput}
              type="password"
              placeholder={"write password"}
              label={"Password"}
            />
          </Form.Field>

          <Button onClick={() => handleLogin()} className="btn">
            Login Here
          </Button>
        </Form>
        <NavLink to="/forget">Forget Password?</NavLink>
      </div>
    </section>
  );
};

export default Login;
