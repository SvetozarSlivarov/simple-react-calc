import { useState } from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import "./App.css";


function App() {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    setInput((prev) => (prev === "0" ? value : prev + value));
  };

  const handleClear = () => {
    setInput("0");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <>
      <div className="calculator">
        <Display value={input} />
        <Buttons handleClick={handleClick} handleClear={handleClear} handleCalculate={handleCalculate} />
      </div> 
    </>
  )
}

export default App
