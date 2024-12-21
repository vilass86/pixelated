import React from "react";
import "./PastCards.css";

const PastCards = ({ pastCards }) => {
  return (
    <div className="past-cards-container">
      <h3>Past Cards</h3>
      <div className="cards-list">
        {pastCards.map((card, index) => {
          // Display the card value and suit as text
          const cardText = `${card.value} of ${card.suit}`;

          return (
            <div key={index} className="card-text">
              {cardText} {/* Display text for each card */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PastCards;
