import React from "react";

function Footer({ onPlayAgain, onExit }) {
  return (
    <div style={styles.footer}>
      <button style={styles.button} onClick={onPlayAgain}>
        Play Again
      </button>
      <button style={styles.button} onClick={onExit}>
        Exit Game
      </button>
    </div>
  );
}

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: "10px",
    background: "#2d2d2d",
    textAlign: "center",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontFamily: "'Press Start 2P', cursive",
    cursor: "pointer",
  },
};

export default Footer;
