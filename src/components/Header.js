import React from "react";

function Header({ balance }) {
  return (
    <div style={styles.header}>
      <div>Balance: ${balance}</div>
      <h1 style={styles.title}>Pixel Card Clash</h1>
      <button style={styles.leaderboardBtn}>Leaderboard</button>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#2d2d2d",
    color: "white",
    fontFamily: "'Press Start 2P', cursive",
  },
  title: { color: "#ffcc00", fontSize: "20px" },
  leaderboardBtn: {
    background: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Header;
