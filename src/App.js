import "./App.css";
import FormDiv from "./components/FormDiv/FormDiv";
import FreeComp from "./components/FreeComp/FreeComp";
import PromoText from "./components/PromoText/PromoText";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <PromoText />
        <section>
          <FreeComp />
          <FormDiv />
        </section>
      </div>
    </div>
  );
}

export default App;
