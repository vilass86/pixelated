import React from "react";
import "./CardDisplay.css";

const CardDisplay = ({
  revealedCard,       // The currently revealed card
  onChangeCard,       // Callback for changing the revealed card
  onGameStart,        // Callback for making predictions (High/Low)
  onSideBet,          // Callback for placing side bets
  gameStarted,        // Boolean: has the game started?
  multipliers,        // Multiplier values for High/Low buttons
}) => {
  return (
    <div className="game-layout">
      {/* Cards Section */}
      <div className="cards-container">
        {/* Faced-Down Card */}
        <div className="top-card">
          <img
            src={require("../assets/cards/default.png")}
            alt="Faced Down Card"
            className="card faced-down"
          />
        </div>

        {/* Revealed Card */}
        <div className="bottom-card">
          {revealedCard ? (
            <img
              src={require(`../assets/cards/${revealedCard.suit}_${revealedCard.value}.png`)}
              alt={`${revealedCard.value} of ${revealedCard.suit}`}
              className="card revealed"
            />
          ) : (
            <img
              src={require("../assets/cards/default.png")}
              alt="Default Card"
              className="card revealed"
            />
          )}
        </div>
      </div>

      {/* Buttons Section */}
      <div className="buttons-area">
        {!gameStarted ? (
          <>
            <button className="change-card-btn" onClick={onChangeCard}>
              Change Card
            </button>
          </>
        ) : (
          <>
            <div className="prediction-buttons">
              <button className="prediction-btn high" onClick={() => onGameStart("high")}>
                High <span className="multiplier-badge">{multipliers.high}x</span>
              </button>
              <button className="prediction-btn low" onClick={() => onGameStart("low")}>
                Low <span className="multiplier-badge">{multipliers.low}x</span>
              </button>
            </div>
            <div className="side-bet-buttons">
              <button className="side-bet-btn red" onClick={() => onSideBet("red")}>
                Bet Red
              </button>
              <button className="side-bet-btn black" onClick={() => onSideBet("black")}>
                Bet Black
              </button>
              <button className="side-bet-btn blue" onClick={() => onSideBet("odd")}>
                Bet Odd
              </button>
              <button className="side-bet-btn blue" onClick={() => onSideBet("even")}>
                Bet Even
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardDisplay;
