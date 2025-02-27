const Buttons = ({ handleClick, handleClear, handleCalculate }) => {
    const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];
  
    return (
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
      </div>
    );
  };
  
  export default Buttons;
  