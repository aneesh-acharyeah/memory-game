import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Card images
  const cardImages = [
    { src: "/images/helmet-1.png", matched: false },
    { src: "/images/potion-1.png", matched: false },
    { src: "/images/ring-1.png", matched: false },
    { src: "/images/scroll-1.png", matched: false },
    { src: "/images/shield-1.png", matched: false },
    { src: "/images/sword-1.png", matched: false },
  ];

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffled);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) =>
          prev.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  // Start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>🎮 Memory Card Game</h1>
      <button onClick={shuffleCards}>🔄 New Game</button>
      <GameBoard
        cards={cards}
        handleChoice={handleChoice}
        flipped={(card) =>
          card === choiceOne || card === choiceTwo || card.matched
        }
        disabled={disabled}
      />
      <p>Turns: {turns}</p>
    </div>
  );
};

export default App;
