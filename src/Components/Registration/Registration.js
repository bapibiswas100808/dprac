import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import "./Registration.css";
import FormInput from "../FormElement/FormInput";
import FormDropdown from "../../Components/FormDropdown/FormDropdown";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [firstInput, setFirstInput] = useState("");
  const [lastInput, setLastInput] = useState("");
  const [dobInput, setDobInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [telInput, setTelInput] = useState("");
  const [pswInput, setPswInput] = useState("");
  const [cpswInput, setCpswInput] = useState("");
  const [gender, setGender] = useState("2");
  const [country, setCountry] = useState("20");

  const navigate = useNavigate();
  const handleFirstInput = (e) => {
    const getFirstInput = e.target.value;
    setFirstInput(getFirstInput);
  };
  const handleLastInput = (e) => {
    const getLastInput = e.target.value;
    setLastInput(getLastInput);
  };
  const handleDobInput = (e) => {
    const getDobInput = e.target.value;
    setDobInput(getDobInput);
  };
  const handleEmailInput = (e) => {
    const getEmailInput = e.target.value;
    setEmailInput(getEmailInput);
  };
  const handleTelInput = (e) => {
    const getTelInput = e.target.value;
    setTelInput(getTelInput);
  };
  const handlePswInput = (e) => {
    const getPswInput = e.target.value;
    setPswInput(getPswInput);
  };
  const handleCpswInput = (e) => {
    const getCpswInput = e.target.value;
    setCpswInput(getCpswInput);
  };

  const genderOptions = [
    {
      id: 0,
      name: "Male",
    },
    {
      id: 1,
      name: "Female",
    },
    {
      id: 2,
      name: "Other",
    },
  ];
  const handleGenderChange = (e) => {
    const genderId = e.target.value;
    setGender(genderId);
  };
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://auth.privateyebd.com/api/v1/country/")
      .then((res) => setCountries(res.data.results))
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryId = e.target.value;
    setCountry(selectedCountryId);
  };

  const handleFormSubmit = () => {
    const registerApiUrl = "https://auth.privateyebd.com/api/v1/signup/";
    const formData = {
      first_name: firstInput,
      last_name: lastInput,
      dob: dobInput,
      email: emailInput,
      mobile: telInput,
      password: pswInput,
      confirm_password: cpswInput,
      country: country,
      gender: gender,
    };

    axios
      .post(registerApiUrl, formData)
      .then((response) => {
        localStorage.setItem("email", response.data.email);
        navigate(`/verification`);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };
  return (
    <section className="registration-area">
      <div className="container pt-4">
        <Form className="pb-4" onSubmit={() => handleFormSubmit()}>
          <Form.Field>
            <FormInput
              firstInputt={firstInput}
              handleInput={handleFirstInput}
              type="text"
              placeholder={"First Name"}
              label={"First Name"}
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              lastInput={lastInput}
              handleInput={handleLastInput}
              type="text"
              placeholder={"Last Name"}
              label={"Last Name"}
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              dobInput={dobInput}
              handleInput={handleDobInput}
              type="date"
              label={"Date of Birth"}
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              emailInput={emailInput}
              handleInput={handleEmailInput}
              type="email"
              placeholder={"Email adress"}
              label={"Email Address"}
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              telInput={telInput}
              handleInput={handleTelInput}
              type="tel"
              placeholder={"Mobile Number"}
              label={"Mobile Number"}
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              pswInput={pswInput}
              handleInput={handlePswInput}
              type="password"
              placeholder={"write password"}
              label={"Password"}
            />
          </Form.Field>
          <Form.Field>
            <FormInput
              cpswInput={cpswInput}
              handleInput={handleCpswInput}
              type="password"
              placeholder={"Write password again"}
              label={"Confirm password"}
            />
          </Form.Field>
          <Form.Field>
            <FormDropdown
              label="Country"
              options={countries}
              value={country}
              onChange={handleCountryChange}
            />
          </Form.Field>
          <Form.Field>
            <FormDropdown
              label="Gender"
              options={genderOptions}
              value={gender}
              onChange={handleGenderChange}
            />
          </Form.Field>
          <p>Click "Register Here" to Submit</p>
          <div>
            <button type="submit" className="btn">
              Register Here
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
};
export default Registration;
