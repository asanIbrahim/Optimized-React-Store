import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");
  const [count, setCount] = useState(45);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 100);
    if (count === 0) {
      if (color === "green") {
        setColor("orange");
        setCount(5);
      } else if (color === "orange") {
        setColor("red");
        setCount(40);
      } else {
        setColor("green");
        setCount(45);
      }
    }
   return () => clearInterval(timer);
  }, [color, count]);
  return (
    <>
      <div
        style={{
          height: 80,
          width: 80,
          borderRadius: "50%",
          background: color,
          margin: "20px auto",
        }}
      />
    </>
  );
};

export default TrafficLight;
