import "./App.css";
import FreeComp from "./components/FreeComp/FreeComp";
import PromoText from "./components/PromoText/PromoText";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <PromoText />
        <FreeComp />
      </div>
    </div>
  );
}

export default App;
