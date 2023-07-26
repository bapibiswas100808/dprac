import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./FormDropdown.css";

const FormDropdown = ({ label, handleChange }) => {
  const options = [
    { key: 1, text: "Male", value: "Male" },
    { key: 2, text: "Female", value: "Female" },
    { key: 3, text: "Others", value: "Others" },
  ];

  const handleDropdown = ({ value }) => {
    handleChange(value);
  };

  return (
    <section className="gender-area">
      <label className="pe-2">{label}</label>
      <Dropdown
        clearable
        options={options}
        selection
        onClick={(e) => handleDropdown(e)}
      />
    </section>
  );
};

export default FormDropdown;
