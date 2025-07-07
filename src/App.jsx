import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonclicked = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "dlt") {
      const dlt = calVal.slice(0, -1);
      setcalVal(dlt);
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newdisplayValue = calVal + buttonText;
      setcalVal(newdisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonclicked={onButtonclicked}></ButtonsContainer>
    </div>
  );
}

export default App;
