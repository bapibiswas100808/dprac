import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Login.css";
import FormInput from "../../Components/FormInput/FormInput";

const Login = () => {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    const getInput = e.target.value;
    setInput(getInput);
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
              input={input}
              handleInput={handleInput}
              type="password"
              placeholder={"write password"}
              label={"Password"}
            />
          </Form.Field>

          <Button className="btn">Login Here</Button>
        </Form>
      </div>
    </section>
  );
};

export default Login;
