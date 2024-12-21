import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import "./UserProfile.css";
import defaultAvatar from "./assets/default-avatar.png";

const UserProfile = ({ data = {} }) => {
  const {
    username: defaultUsername = "Guest",
    walletAddress: defaultWalletAddress = "N/A",
    joinDate: defaultJoinDate = "N/A",
    profilePicture,
    highestScore: defaultHighestScore = 0,
    dailyHighestScore: defaultDailyHighestScore = 0,
    averageScore: defaultAverageScore = 0,
  } = data;

  const { publicKey } = useWallet();
  const [walletAddress, setWalletAddress] = useState(defaultWalletAddress);

  useEffect(() => {
    // Update wallet address when a wallet connects
    if (publicKey) {
      setWalletAddress(publicKey.toBase58());
    } else {
      setWalletAddress(defaultWalletAddress);
    }
  }, [publicKey, defaultWalletAddress]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };

  return (
    <div className="user-profile">
      <img
        src={profilePicture || defaultAvatar}
        alt="Profile"
        className="profile-picture"
      />
      <h2>{publicKey ? "Connected User" : defaultUsername}</h2>
      <div className="wallet-info">
        <p>
          <strong>Wallet:</strong> {walletAddress}
          <button onClick={copyToClipboard} className="copy-button">
            Copy
          </button>
        </p>
        <p>
          <strong>Joined:</strong> {publicKey ? "Connected Date Unavailable" : defaultJoinDate}
        </p>
      </div>
      <div className="stats">
        <p>
          <strong>Highest Score Ever:</strong> {defaultHighestScore}
        </p>
        <p>
          <strong>Daily Highest Score:</strong> {defaultDailyHighestScore}
        </p>
        <p>
          <strong>Average Score:</strong> {defaultAverageScore}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
