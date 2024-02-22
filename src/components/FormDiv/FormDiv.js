import FormDivInputs from "../FromDivInputs/FormDivInputs";
import "./formDiv.css";

function FormDiv() {
  return (
    <div className="form-div">
      <form className="trial-form">
        <FormDivInputs type="text" placeholder="First Name" />
        <FormDivInputs type="text" placeholder="Last Name" />
        <FormDivInputs type="email" placeholder="Email Address" />
        <FormDivInputs type="password" placeholder="Password" />
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
