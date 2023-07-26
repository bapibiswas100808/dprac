import React from "react";
// import { Dropdown } from "semantic-ui-react";
// import "./FormDropdown.css";
const FormDropdown = ({ label, options, value, onChange }) => {
  // const options = [
  //   { key: 1, text: "Male", value: "Male" },
  //   { key: 2, text: "Female", value: "Female" },
  //   { key: 3, text: "Others", value: "Others" },
  // ];
  // const handleDropdown = ({ value }) => {
  //   handleChange(value);
  // };
  return (
    // <section className="gender-area">
    //   <label className="pe-2">{label}</label>
    //   <Dropdown
    //     clearable
    //     options={options}
    //     selection
    //     onClick={(e) => handleDropdown(e)}
    //   />
    // </section>
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select className="form-select" value={value} onChange={onChange}>
        {options.length > 0 ? (
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))
        ) : (
          <option value="">No options available</option>
        )}
      </select>
    </div>
  );
};
export default FormDropdown;
