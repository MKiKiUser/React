import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div
      style={{
        backgroundColor: color,
        width: "100vw",
        height: "100vh",
        transition: "background-color 0.2s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "20px" }}>
        Background Color: {color}
      </h1>
      <div>
        <button
          onClick={() => setColor("red")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "red",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "blue",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "green",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
