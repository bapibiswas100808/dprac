import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import "./Login.css";
import FormInput from "../FormElement/FormInput";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
        localStorage.setItem("getToken", response.data.token);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response.data);
        const loginError = error.response.data.email;
        const loginPasswordError = error.response.data.detail;
        alert(loginError ? loginError : loginPasswordError);
      });
  };
  return (
    <section className="login-area">
      <div className="container pt-4">
        <Form className="pb-3">
          <Form.Field>
            <FormInput
              input={input}
              handleInput={handleInput}
              type="email"
              placeholder={"Email adress"}
              label={"Email Address"}
              errorMessage="Email does not exists"
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              lgPswInput={lgPswInput}
              handleInput={handleLgPswInput}
              type="password"
              placeholder={"write password"}
              label={"Password"}
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,30}$"
              errorMessage="Password should be at least 8 character having one letter, one number and one special character!"
            />
          </Form.Field>

          <div>
            <button onClick={() => handleLogin()} className="btn">
              Login Here
            </button>
          </div>
        </Form>
        <NavLink to="/forget">Forget Password?</NavLink>
      </div>
    </section>
  );
};

export default Login;
