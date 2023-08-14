import { useState } from "react";
import "./FormInput.css";

const FormInput = ({
  errorMessage,
  id,
  handleInput,
  placeholder,
  type,
  label,
  pattern,
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <section>
      <label className="pb-2">{label}</label>
      <input
        onChange={(e) => handleInput(e)}
        placeholder={placeholder}
        type={type}
        id={id}
        required
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </section>
  );
};

export default FormInput;
