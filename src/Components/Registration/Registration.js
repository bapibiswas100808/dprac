import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Registration.css";
import FormInput from "../../Components/FormInput/FormInput";
import FormDropdown from "../../Components/FormDropdown/FormDropdown";

const Registration = () => {
  const [input, setInput] = useState("");
  const [gender, setGender] = useState("");
  const handleInput = (e) => {
    const getInput = e.target.value;
    setInput(getInput);
  };
  const handleChange = (selectedGender) => {
    setGender(selectedGender);
  };
  const handleFormSubmit = () => {
    console.log("First Name:", input);
    console.log("Last Name:", input);
    console.log("Date of Birth:", input);
    console.log("Email Address:", input);
    console.log("Mobile Number:", input);
    console.log("Password:", input);
    console.log("Confirm Password:", input);
    console.log("Selected Gender:", gender);
  };

  return (
    <section className="registration-area">
      <div className="container pt-4">
        <Form>
          <Form.Field>
            <FormInput
              input={input}
              handleInput={handleInput}
              type="text"
              placeholder={"First Name"}
              label={"First Name"}
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              input={input}
              handleInput={handleInput}
              type="text"
              placeholder={"Last Name"}
              label={"Last Name"}
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              input={input}
              handleInput={handleInput}
              type="date"
              label={"Date of Birth"}
            />
          </Form.Field>
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
              type="tel"
              placeholder={"Mobile Number"}
              label={"Mobile Number"}
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
          <Form.Field>
            <FormInput
              input={input}
              handleInput={handleInput}
              type="password"
              placeholder={"Write password again"}
              label={"Confirm password"}
            />
          </Form.Field>
          <Form.Field>
            <FormDropdown
              gender={gender}
              label={"Select Gender"}
              handleChange={handleChange}
            />
          </Form.Field>

          <Button onClick={() => handleFormSubmit()} className="btn">
            Register Here
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Registration;
