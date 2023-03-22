import React, { useState } from "react";

export const Reacthook: React.FC = () => {
  function countInitial() {
    console.log("run initial");
    return 4;
  }

  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("You");

  const decrementCount = () => {
    // setCount((prev) => prev - 1);
    setCount((prevCount) => {
      return prevCount - 1;
    });
    setTheme(theme === "You" ? "fuck" : "You");
  };
  const incrementCount = () => {
    setCount((prev) => prev + 1);
    setTheme(theme === "You" ? "fuck" : "You");
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};
