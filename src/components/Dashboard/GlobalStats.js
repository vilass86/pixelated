const GlobalStats = ({ data }) => {
    if (!data) return <p>Loading global stats...</p>;
  
    const { totalGamesPlayed, totalPrizePool, averageMultiplier } = data;
  
    return (
      <div>
        <h2>Global Stats</h2>
        <p>Total Games Played: {totalGamesPlayed}</p>
        <p>Total Prize Pool: {totalPrizePool} SOL</p>
        <p>Average Multiplier: {averageMultiplier}x</p>
      </div>
    );
  };
  export default GlobalStats;
  