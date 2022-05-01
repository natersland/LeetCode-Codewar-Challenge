import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [countNumber, setCountNumber] = useState(0);

  const addNumber = () => {
    if (countNumber >= 10) {
      alert("ไม่สามารถลบตัวเลขให้มากกว่า 10 ได้");
    } else {
      setCountNumber(countNumber + 1);
    }
  };
  const minusNumber = () => {
    if (countNumber >= 1) {
      setCountNumber(countNumber - 1);
    } else {
      alert("ไม่สามารถลบตัวเลขที่มีค่าเป็น 0 ได้");
    }
  };
  const resetNumber = () => {
    setCountNumber(0);
  };
  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <h2>{countNumber}</h2>
      <div>
        <button onClick={addNumber}>+</button>
        <button onClick={minusNumber}>-</button>
        <button onClick={resetNumber}>Reset</button>
      </div>
    </div>
  );
}
