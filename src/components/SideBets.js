import React from "react";

function SideBets({ onSideBet }) {
  const bets = ["Red", "Black", "Odd", "Even"];

  return (
    <div style={{ margin: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
      {bets.map((bet) => (
        <button
          key={bet}
          onClick={() => onSideBet(bet.toLowerCase())}
          style={{
            padding: "10px",
            backgroundColor: "#4a90e2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontFamily: "'Press Start 2P', cursive",
            cursor: "pointer",
          }}
        >
          {bet}
        </button>
      ))}
    </div>
  );
}

export default SideBets;
