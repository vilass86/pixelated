import React from "react";

const LeaderboardHighlights = ({ leaderboardRank, rankChange }) => {
  return (
    <div className="leaderboard-highlights">
      <h2>Leaderboard Highlights</h2>
      <p>Current Rank: {leaderboardRank || "N/A"}</p>
      <p>
        {rankChange
          ? `Rank Change: ${rankChange > 0 ? "+" : ""}${rankChange}`
          : "No rank change this week"}
      </p>
    </div>
  );
};

export default LeaderboardHighlights;
