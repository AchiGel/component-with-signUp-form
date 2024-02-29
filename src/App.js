import "./App.css";
import FormDiv from "./components/FormDiv/FormDiv";
import FreeComp from "./components/FreeComp/FreeComp";
import PromoText from "./components/PromoText/PromoText";
import SuccessModal from "./components/SuccessModal/SuccessModal";
import { useState } from "react";

function App() {
  const [success, setSuccess] = useState(false);

  if (success) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  function handleModal(e) {
    e.preventDefault();
    setSuccess(!success);
  }

  return (
    <div className="App">
      {success && <SuccessModal handleModal={handleModal} />}
      <div className="wrapper">
        <PromoText />
        <section>
          <FreeComp />
          <FormDiv success={success} setSuccess={setSuccess} />
        </section>
      </div>
    </div>
  );
}

export default App;
