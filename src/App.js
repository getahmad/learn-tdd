import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const handleMinus = () => {
    if (counter === 0) {
      return false;
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="App">
      <h1>This is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button className="btn-plus" onClick={() => setCounter(counter + 1)}>
        Plus
      </button>
      <button className="btn-minus" onClick={handleMinus}>
        Minus
      </button>
    </div>
  );
}

export default App;
