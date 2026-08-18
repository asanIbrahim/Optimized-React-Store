import React from 'react'
import { useTheme } from '../../context/ThemeContext';

const NewTheme = () => {
const {theme ,toggleTheme} = useTheme()
  return (
   
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
  )
}

export default NewTheme