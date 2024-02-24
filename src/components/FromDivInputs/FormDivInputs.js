import { useState } from "react";

function FormDivInputs(props) {
  const [textContent, setTextContent] = useState("");
  const [textContentError, setTextContentError] = useState("");
  const placeholder = props.placeholder;
  const [warning, setWarning] = useState(false);

  function validateTextContent(e) {
    const value = e.target.value;
    setTextContent(value);
    if (value.trim() === "") {
      setTextContentError(placeholder + " cannot be empty");
      setWarning(true);
    } else {
      setTextContentError("");
      setWarning(false);
    }
  }

  function validateEmailInput(e) {
    const value = e.target.value;
    setTextContent(value);
    if (!value.trim().includes("@") || !value.trim().includes(".")) {
      setTextContentError("Looks like this is not an email");
      setWarning(true);
    } else {
      setTextContentError("");
      setWarning(false);
    }
  }

  return (
    <>
      <input
        className={warning ? "warning-input" : ""}
        onChange={
          props.type === "email" ? validateEmailInput : validateTextContent
        }
        type={props.type}
        placeholder={props.placeholder}
        value={textContent}
      />
      {textContentError && <p className="warning">{textContentError}</p>}
    </>
  );
}

export default FormDivInputs;
