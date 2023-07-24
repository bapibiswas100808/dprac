import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./Login.css";

const Login = () => {
  return (
    <section className="login-area">
      <div className="container pt-4">
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Email Address</label>
            <input placeholder="your email" />
          </Form.Field>

          <Button className="btn">Login Here</Button>
        </Form>
      </div>
    </section>
  );
};

export default Login;
