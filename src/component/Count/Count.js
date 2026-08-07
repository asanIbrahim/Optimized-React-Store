import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/action";
import { useTheme } from '../../context/ThemeContext';
const Count = () => {
const count = useSelector((state) => state.count);
const dispatch = useDispatch();
const {theme ,toggleTheme} = useTheme()

  return (
  <div>

      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Context Theme Example</h1>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>

    </div>
  )
}

export default Count
