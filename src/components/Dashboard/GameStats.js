const GameStats = ({ data }) => {
  if (!data) return <p>Loading game stats...</p>;

  const { gamesPlayed, totalWins, currentMultiplierRecord, effectiveScoreRecord, sideBetSuccessRate } = data;

  return (
    <div>
      <h2>Game Stats</h2>
      <p>Games Played: {gamesPlayed}</p>
      <p>Total Wins: {totalWins}</p>
      <p>Highest Multiplier: {currentMultiplierRecord}x</p>
      <p>Highest Score: {effectiveScoreRecord}</p>
      <p>Side Bet Success Rate: {sideBetSuccessRate}%</p>
    </div>
  );
};
export default GameStats;
