import "./successModal.css";

function SuccessModal(props) {
  return (
    <div className="modal">
      <div className="modal-window">
        <h2>Thank You!</h2>
        <p>
          Thanks for subscribing to our services. You should receive a
          confirmation email soon!
        </p>
        <button onClick={props.handleModal}>Go Home</button>
      </div>
    </div>
  );
}

export default SuccessModal;
