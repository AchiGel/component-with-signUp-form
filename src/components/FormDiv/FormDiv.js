import { useState } from "react";
import "./formDiv.css";

function FormDiv() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [warning, setWarning] = useState(false);

  function handleTextInput(e) {
    const value = e.target.value;
    setFirstName(value);

    if (value.trim() === "") {
      setFirstNameError("First Name cannot be empty");
      setWarning(true);
    } else if (value.length < 2) {
      setFirstNameError("First name must be at least 2 characters");
      setWarning(true);
    } else {
      setFirstNameError("");
      setWarning(false);
    }
  }

  return (
    <div className="form-div">
      <form className="trial-form">
        <input
          className={warning ? "trial-form warning-input" : ""}
          onChange={handleTextInput}
          type="text"
          placeholder="First Name"
          value={firstName}
        />
        {firstNameError && <p className="error warning">{firstNameError}</p>}
        <input type="text" placeholder="First Name" />
        <input type="email" placeholder="First Name" />
        <input type="password" placeholder="First Name" />
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
      </form>
      <p>
        By clicking the button, you are agreeing to our
        <span> Terms and Services</span>
      </p>
    </div>
  );
}

export default FormDiv;
