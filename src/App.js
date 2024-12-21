import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HowItWorksModal from "./components/HowItWorksModal";
import MultiplierTableModal from "./components/MultiplierTableModal";
import CardDisplay from "./components/CardDisplay";
import PastCards from "./components/PastCards";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react"; // Import useWallet for wallet connection
import "./App.css";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [revealedCard, setRevealedCard] = useState(null);
  const [nextCard, setNextCard] = useState(null);
  const [baseAmount] = useState(20);
  const [multiplier, setMultiplier] = useState(1.0);
  const [message, setMessage] = useState("");
  const [sideBet, setSideBet] = useState(null);
  const [sideBetScore, setSideBetScore] = useState(0);
  const [pastCards, setPastCards] = useState([]);
  const [prizePool] = useState(100); // Placeholder for Prize Pool
  const [leaderboard, setLeaderboard] = useState([
    { address: "0x123...456", points: 250 },
    { address: "0x789...abc", points: 200 },
    { address: "0xdef...ghi", points: 180 },
  ]); // Placeholder Leaderboard Data

  const [userWallet, setUserWallet] = useState("N/A"); // Store wallet address for dynamic updates
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isMultiplierTableOpen, setIsMultiplierTableOpen] = useState(false);

  const { publicKey } = useWallet(); // Access wallet public key

  useEffect(() => {
    // Dynamically update userWallet when the wallet is connected
    if (publicKey) {
      setUserWallet(`${publicKey.toBase58().slice(0, 6)}...${publicKey.toBase58().slice(-4)}`);
    }
  }, [publicKey]);

  useEffect(() => {
    setRevealedCard(generateCard());
    setMessage("Your first card is revealed! Make your prediction.");
  }, []);

  const generateCard = () => {
    const suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    return { suit, value };
  };

  const getCardValueIndex = (value) => {
    const cardOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    return cardOrder.indexOf(value);
  };

  const cardMultipliers = {
    "2": { high: 1.2, low: 4 },
    "3": { high: 1.25, low: 3.5 },
    "4": { high: 1.3, low: 3 },
    "5": { high: 1.35, low: 2.5 },
    "6": { high: 1.4, low: 2 },
    "7": { high: 1.5, low: 1.7 },
    "8": { high: 1.6, low: 1.6 },
    "9": { high: 1.8, low: 1.6 },
    "10": { high: 2, low: 1.5 },
    Jack: { high: 2.5, low: 1.4 },
    Queen: { high: 3, low: 1.3 },
    King: { high: 4, low: 1.2 },
    Ace: { high: 1.2, low: 1.2 },
  };

  const startNewGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setMultiplier(1.0);
    setSideBetScore(0);
    setPastCards([]);
    setRevealedCard(generateCard());
    setNextCard(null);
    setMessage("New game started! Good luck, make your first prediction.");
    setSideBet(null);
  };

  const calculateEffectiveScore = () => {
    const adjustedMultiplier = Math.max(multiplier + sideBetScore, 0);
    return baseAmount * adjustedMultiplier;
  };

  const handlePrediction = (prediction) => {
    if (!gameStarted || gameOver) {
      setMessage("Please start a new game to make predictions!");
      return;
    }

    const nextCardGenerated = generateCard();
    setNextCard(nextCardGenerated);
    const currentCardIndex = getCardValueIndex(revealedCard.value);
    const nextCardIndex = getCardValueIndex(nextCardGenerated.value);

    setPastCards((prev) => [...prev, revealedCard]);

    if (revealedCard.value === nextCardGenerated.value) {
      setMultiplier((prev) => prev * 1.5);
      setRevealedCard(nextCardGenerated);
      handleSideBetResult(nextCardGenerated);
      setMessage("Card matched! You earned a guaranteed 1.5x multiplier. Make your next prediction.");
      return;
    }

    if (revealedCard.value === "Ace") {
      setMultiplier((prev) => prev * 1.2);
      setRevealedCard(nextCardGenerated);
      handleSideBetResult(nextCardGenerated);
      setMessage("Ace gives you a guaranteed 1.2x! Make your next prediction.");
      return;
    }

    if (nextCardGenerated.value === "Ace") {
      setMultiplier((prev) => prev * 1.2);
      setRevealedCard(nextCardGenerated);
      handleSideBetResult(nextCardGenerated);
      setMessage("Ace wins! Make your next prediction.");
      return;
    }

    const isCorrect =
      (prediction === "high" && nextCardIndex > currentCardIndex) ||
      (prediction === "low" && nextCardIndex < currentCardIndex);

    if (isCorrect) {
      const multiplierGain = cardMultipliers[revealedCard.value][prediction];
      setMultiplier((prev) => prev * multiplierGain);
      setRevealedCard(nextCardGenerated);
      handleSideBetResult(nextCardGenerated);
      setMessage("Correct! Make your next prediction.");
    } else {
      handleSideBetResult(nextCardGenerated);
      setMessage("Wrong prediction! Game over.");
      setRevealedCard(nextCardGenerated);
      setGameOver(true);
    }
  };

  const handleSideBetResult = (card) => {
    if (!sideBet) return;

    const isRed = card.suit === "Diamonds" || card.suit === "Hearts";
    const isOdd = getCardValueIndex(card.value) % 2 !== 0;

    const isCorrect =
      (sideBet === "red" && isRed) ||
      (sideBet === "black" && !isRed) ||
      (sideBet === "odd" && isOdd) ||
      (sideBet === "even" && !isOdd);

    setSideBetScore((prev) => prev + (isCorrect ? 1 : -1));
    setSideBet(null);
  };

  const handleSideBet = (betType) => {
    if (!gameStarted || gameOver) {
      setMessage("Side bets cannot be placed right now! Start a new game.");
      return;
    }

    if (sideBet) {
      setMessage("You can place only one side bet per round!");
      return;
    }

    setSideBet(betType);
    setMessage(`Side bet placed on ${betType.toUpperCase()}.`);
  };

  const shortenAddress = (address) =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <Router>
      <div className="app">
        {/* Modals */}
        {isHowItWorksOpen && (
          <HowItWorksModal
            isOpen={isHowItWorksOpen}
            onClose={() => setIsHowItWorksOpen(false)}
          />
        )}

        {isMultiplierTableOpen && (
          <MultiplierTableModal
            isOpen={isMultiplierTableOpen}
            onClose={() => setIsMultiplierTableOpen(false)}
          />
        )}

        {/* Navbar */}
        <Navbar
          onHowItWorks={() => setIsHowItWorksOpen(true)}
          onMultiplierTable={() => setIsMultiplierTableOpen(true)}
        />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="game-title">Pixel High-Low Card Game</h1>
                <div className="layout">
                  <PastCards pastCards={pastCards} />
                  <div className="game-area">
                    <div className="right-section">
                      <div className="stats-box">
                        <h2>Prize Pool</h2>
                        <p>{prizePool.toFixed(2)} SOL</p>
                      </div>
                      <div className="leaderboard">
                        <h2>Leaderboard</h2>
                        <ul>
                          {leaderboard.map((entry, index) => (
                            <li key={index}>
                              <a
                                href={`/profile/${entry.address}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {shortenAddress(entry.address)}
                              </a>{" "}
                              - {entry.points} pts
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="game-info">
                      <p>
                        <span className="label">Wallet Address:</span>{" "}
                        <span className="value">{userWallet}</span>
                      </p>
                      <p>
                        <span className="label">Base Amount:</span>{" "}
                        <span className="value">{baseAmount.toFixed(2)}</span>
                      </p>
                      <p>
                        <span className="label">Multiplier:</span>{" "}
                        <span className="value">{multiplier.toFixed(2)}x</span>
                      </p>
                      <p>
                        <span className="label">Side Bet Score:</span>{" "}
                        <span className="value">{sideBetScore}</span>
                      </p>
                      <p>
                        <span className="label">Effective Score:</span>{" "}
                        <span className="value">{calculateEffectiveScore().toFixed(2)}</span>
                      </p>
                    </div>
                    <div className="message-box">{message}</div>
                    <CardDisplay
                      revealedCard={revealedCard}
                      nextCard={nextCard}
                      onChangeCard={() => setRevealedCard(generateCard())}
                      onGameStart={handlePrediction}
                      onSideBet={handleSideBet}
                      gameStarted={gameStarted}
                      multipliers={revealedCard ? cardMultipliers[revealedCard.value] : { high: 1.0, low: 1.0 }}
                    />
                    {gameOver && (
                      <button className="start-btn" onClick={startNewGame}>
                        Start New Game
                      </button>
                    )}
                    {!gameStarted && !gameOver && (
                      <button className="start-btn" onClick={() => setGameStarted(true)}>
                        Start Game
                      </button>
                    )}
                  </div>
                </div>
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
