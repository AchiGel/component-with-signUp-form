import "./formDiv.css";

function FormDiv() {
  return (
    <div className="form-div">
      <form className="trial-form">
        <input type="text" placeholder="First Name" />
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
