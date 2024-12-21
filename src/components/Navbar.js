import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onHowItWorks, onMultiplierTable }) => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">BitDeck</div>

      {/* Info Links */}
      <div className="info-links">
        <span className="info-link" onClick={onHowItWorks}>
          How it Works
        </span>
        <span className="info-link" onClick={onMultiplierTable}>
          Multiplier Table
        </span>
      </div>

      {/* Button Group */}
      <div className="button-group">
        <Link to="/dashboard" className="dashboard-btn">
          Dashboard
        </Link>
        <WalletMultiButton className="connect-wallet" />
      </div>
    </div>
  );
};

export default Navbar;
