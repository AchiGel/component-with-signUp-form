import React, { useState } from "react";
import FormDivInputs from "../FromDivInputs/FormDivInputs";
import "./formDiv.css";

function FormDiv(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [warning, setWarning] = useState(false);

  function validateFirstName(value) {
    if (value.trim() === "") {
      setFirstNameError("First Name cannot be empty");
      return false;
    }
    setFirstNameError("");
    setFirstName("");
    return true;
  }

  function validateLastName(value) {
    if (value.trim() === "") {
      setLastNameError("Last Name cannot be empty");
      return false;
    }
    setLastNameError("");
    setLastName("");
    return true;
  }

  function validateEmail(value) {
    if (!value.trim().includes("@") || !value.trim().includes(".")) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError("");
    setEmail("");
    return true;
  }

  function validatePassword(value) {
    if (value.trim() === "") {
      setPasswordError("Password cannot be empty");
      return false;
    }
    setPasswordError("");
    setPassword("");
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValidFirstName = validateFirstName(firstName);
    const isValidLastName = validateLastName(lastName);
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (
      isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidPassword
    ) {
      console.log("Form submitted successfully!");
      props.setSuccess(!props.sucess);
    } else {
      setWarning(!warning);
    }
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit} className="trial-form">
        <FormDivInputs
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={firstNameError}
          warning={warning}
        />
        <FormDivInputs
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={lastNameError}
          warning={warning}
        />
        <FormDivInputs
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          warning={warning}
        />
        <FormDivInputs
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          warning={warning}
        />
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
