function FormDivInputs(props) {
  return (
    <>
      <input
        className={props.warning ? "warning-input" : null}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <p className="warning">{props.error}</p>}
    </>
  );
}

export default FormDivInputs;
