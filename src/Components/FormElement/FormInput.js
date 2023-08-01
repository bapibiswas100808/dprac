import React from "react";

const FormInput = ({ handleInput, placeholder, type, label }) => {
  return (
    <section>
      <label className="pb-2">{label}</label>
      <input
        onChange={(e) => handleInput(e)}
        placeholder={placeholder}
        type={type}
      />
    </section>
  );
};

export default FormInput;
