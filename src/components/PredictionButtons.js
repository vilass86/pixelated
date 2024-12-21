import React from "react";

function PredictionButtons({ onPredict }) {
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => onPredict("low")}>
        Low (1.8x)
      </button>
      <button style={styles.button} onClick={() => onPredict("high")}>
        High (1.5x)
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", margin: "20px" },
  button: {
    margin: "10px",
    padding: "10px 20px",
    background: "#ff4081",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontFamily: "'Press Start 2P', cursive",
    cursor: "pointer",
    boxShadow: "2px 2px #444",
  },
};

export default PredictionButtons;
