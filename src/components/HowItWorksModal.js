import React from "react";
import "./HowItWorksModal.css";

const HowItWorksModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-header">
        <h2>How It Works</h2>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-content">

        <h2>How It Works</h2>
        <div className="modal-body">
          <h3>Objective</h3>
          <p>
            The goal is to predict whether the next card will be higher or lower than the current
            revealed card, earning multipliers for correct guesses. Compete for the highest score
            and enjoy bonus rewards through side bets.
          </p>
          <h3>Gameplay</h3>
          <ol>
            <li>
              <strong>Start the Game:</strong> Click <em>Start Game</em> to begin. The first card
              will be revealed. Use the <em>Change Card</em> button before starting if you don’t
              like the first card.
            </li>
            <li>
              <strong>Making Predictions:</strong> Choose <em>High</em> or <em>Low</em> to guess
              whether the next card will have a higher or lower value. Each correct prediction
              increases your multiplier.
            </li>
            <li>
              <strong>Special Cases:</strong> Ace always wins with a 1.2x multiplier. Matching cards
              give you a bonus 1.5x multiplier.
            </li>
          </ol>
          <h3>Side Bets</h3>
          <p>
            Place a side bet to predict special card properties like color (red/black) or value
            (odd/even). Correct bets add +1, and incorrect bets subtract -1 from your side bet
            score.
          </p>
          <h3>Scoring</h3>
          <p>
            Your final score is calculated using the formula:
            <br />
            <em>Final Score = Base Amount × (Multiplier + Side Bet Score)</em>
          </p>
          <h3>Tips for Success</h3>
          <p>Use the Multiplier Table and strategize your predictions wisely for better rewards!</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksModal;
