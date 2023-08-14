
import "./FormInput.css";

const FormInput = ({ handleInput, placeholder, type, label }) => {
  return (
    <section>
      <label className="pb-2">{label}</label>
      <input
        onChange={(e) => handleInput(e)}
        placeholder={placeholder}
        type={type}
        className=""
        id="input"
      />
      <span  className=""></span>
    </section>
  );
};

export default FormInput;
