import React from "react";

function Leaderboard({ players }) {
  return (
    <div style={{ margin: "20px", padding: "10px", backgroundColor: "#444", borderRadius: "5px" }}>
      <h3>Leaderboard</h3>
      <table style={{ width: "100%", color: "white", textAlign: "left" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
