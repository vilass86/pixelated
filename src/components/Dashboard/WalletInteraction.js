import React from "react";

const WalletInteraction = ({ balance, onDeposit, onWithdraw }) => {
  return (
    <div className="wallet-interaction">
      <h2>Wallet Interaction</h2>
      <p>Balance: {balance || 0} SOL</p>
      <button onClick={onDeposit} className="wallet-button">
        Deposit
      </button>
      <button onClick={onWithdraw} className="wallet-button">
        Withdraw
      </button>
    </div>
  );
};

export default WalletInteraction;
