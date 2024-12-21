import React from "react";

function MessageModal({ message, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p style={styles.message}>{message}</p>
        <button style={styles.button} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#2d2d2d",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    fontFamily: "'Press Start 2P', cursive",
    maxWidth: "400px",
    width: "80%",
  },
  message: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ff4081",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontFamily: "'Press Start 2P', cursive",
    cursor: "pointer",
    boxShadow: "2px 2px #444",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#ff6581",
  },
};

export default MessageModal;
