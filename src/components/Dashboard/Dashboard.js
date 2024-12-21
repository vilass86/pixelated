import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import defaultAvatar from "./assets/default-avatar.png";
import "./Dashboard.css";

const Dashboard = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [userData, setUserData] = useState({
    username: "Guest",
    walletAddress: "N/A",
    joinDate: "N/A",
    highestScore: 0,
    dailyHighScore: 0,
    averageScore: 0,
    balance: "0 SOL",
  });

  const { publicKey } = useWallet();
  const navigate = useNavigate();

  // Shorten wallet address for display purposes
  const shortenAddress = (address) =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;

  useEffect(() => {
    // Update wallet address dynamically if connected
    if (publicKey) {
      setUserData((prevData) => ({
        ...prevData,
        walletAddress: shortenAddress(publicKey.toBase58()),
      }));
    }
  }, [publicKey]);

  const handleCopyWallet = () => {
    if (publicKey) {
      navigator.clipboard
        .writeText(publicKey.toBase58())
        .then(() => {
          setCopySuccess("Copied!");
          setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
        })
        .catch((err) => console.error("Failed to copy wallet address: ", err));
    }
  };

  return (
    <div className="dashboard">
      {/* User Profile Section */}
      <div className="user-profile">
        <div className="profile-header">
          <h2>User Profile</h2>
          <button className="game-arena-btn" onClick={() => navigate("/")}>
            Game Arena
          </button>
        </div>
        <div className="profile-container">
          <div className="profile-left">
            <img src={defaultAvatar} alt="Profile Avatar" />
            <div>
              <p>
                <strong>Username:</strong> {userData.username}
              </p>
              <p>
                <strong>Wallet Address:</strong> {userData.walletAddress}
                <button className="copy-wallet" onClick={handleCopyWallet}>
                  Copy
                </button>
                {copySuccess && <span className="copy-success">{copySuccess}</span>}
              </p>
              <p>
                <strong>Join Date:</strong> {userData.joinDate}
              </p>
            </div>
          </div>
          <div className="profile-right">
            <p>
              <strong>Highest Score:</strong> {userData.highestScore}
            </p>
            <p>
              <strong>Daily High Score:</strong> {userData.dailyHighScore}
            </p>
            <p>
              <strong>Average Score:</strong> {userData.averageScore}
            </p>
          </div>
        </div>
      </div>

      {/* Game Stats Section */}
      <div className="game-stats">
        <h2>Game Stats</h2>
        <p>Games Played: 100</p>
        <p>Total Wins: 60</p>
        <p>Highest Multiplier: 15x</p>
        <p>Effective Score Record: 300</p>
        <p>Side Bet Success Rate: 75%</p>
      </div>

      {/* Activity History Section */}
      <div className="activity-history">
        <h2>Activity History</h2>
        <ul>
          <li>Game #99 - Multiplier: 5x</li>
          <li>Game #98 - Multiplier: 7x</li>
          <li>Game #97 - Multiplier: 3x</li>
        </ul>
      </div>

      {/* Wallet Interaction Section */}
      <div className="wallet-interaction">
        <h2>Wallet Interaction</h2>
        <p>Balance: {userData.balance}</p>
        <button className="wallet-button">Deposit</button>
        <button className="wallet-button">Withdraw</button>
      </div>

      {/* Leaderboard Highlights Section */}
      <div className="leaderboard-highlights">
        <h2>Leaderboard Highlights</h2>
        <ul>
          <li>1. 0x123...789 - 500 pts</li>
          <li>2. 0xabc...def - 450 pts</li>
          <li>3. 0xghi...jkl - 400 pts</li>
        </ul>
      </div>

      {/* Achievements Section */}
      <div className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>First Win</li>
          <li>Multiplier Master (10x+)</li>
          <li>Risk Taker (50 side bets)</li>
        </ul>
      </div>

      {/* Global Stats Section */}
      <div className="global-stats">
        <h2>Global Stats</h2>
        <p>Total Games Played: 10,000</p>
        <p>Total SOL in Prize Pool: 1000 SOL</p>
        <p>Average Multiplier: 3x</p>
      </div>
    </div>
  );
};

export default Dashboard;
