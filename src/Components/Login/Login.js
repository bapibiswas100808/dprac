import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Login.css";
import FormInput from "../../Components/FormInput/FormInput";

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
    console.log(input);
    console.log(lgPswInput);
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
      </div>
    </section>
  );
};

export default Login;
